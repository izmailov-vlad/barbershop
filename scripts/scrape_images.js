import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Целевой URL (можно передать первым аргументом CLI)
const targetUrl = process.argv[2] || 'https://krutt.ru/';

// Базовая директория для сохранения
const assetsDir = path.join(__dirname, '..', 'src', 'assets');
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

// Вспомогательные функции Node
function toSlug(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .replace(/[^a-z0-9а-яё_\-\s#\.]/gi, '-')
        .replace(/\s+/g, '-')
        .replace(/\.+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$|^_+|_+$/g, '') || 'root';
}

async function scrapeImages() {
    console.log('🚀 Запуск скрипта для выкачки изображений...');
    console.log(`🌐 Целевой URL: ${targetUrl}`);

    const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1600, height: 1000 } });

    try {
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

        console.log('📱 Открываем страницу...');
        await page.goto(targetUrl, { waitUntil: 'networkidle2', timeout: 45000 });

        // Прокрутка для подгрузки ленивых изображений
        await page.evaluate(async () => {
            await new Promise(resolve => {
                let y = 0; const step = 800;
                const timer = setInterval(() => {
                    window.scrollBy(0, step); y += step;
                    if (y >= document.body.scrollHeight) { clearInterval(timer); resolve(null); }
                }, 350);
            });
        });
        await new Promise(r => setTimeout(r, 1200));

        console.log('🔍 Анализируем структуру страницы и изображения...');

        const imagesWithContext = await page.evaluate(() => {
            function txt(n) { return (n && (n.innerText || n.textContent) || '').trim(); }
            function norm(s) { return (s || '').trim().toLowerCase(); }
            function elSlugFrom(el) {
                if (!el) return 'root';
                const id = el.id ? `#${el.id}` : '';
                const cls = (el.className || '').toString().split(/\s+/).filter(Boolean)[0] || '';
                const token = id || cls || el.tagName.toLowerCase();
                return token.replace(/^#/, 'id-');
            }
            function nearestContainer(el) {
                return el.closest('[data-section], section, article, main, header, footer, div') || document.body;
            }
            function domPath(el) {
                const parts = [];
                let cur = el;
                let depth = 0;
                while (cur && depth < 8) {
                    const tag = cur.tagName ? cur.tagName.toLowerCase() : 'root';
                    const id = cur.id ? `#${cur.id}` : '';
                    const cls = (cur.className || '').toString().split(/\s+/).filter(Boolean).slice(0, 2).map(c => `.${c}`).join('');
                    parts.unshift(`${tag}${id}${cls}`);
                    cur = cur.parentElement;
                    depth++;
                }
                return parts.join(' > ');
            }

            const results = [];

            // <img>
            document.querySelectorAll('img').forEach((img, index) => {
                if (!img.src || img.src.trim() === '') return;
                const container = nearestContainer(img);
                const catSlug = elSlugFrom(container);
                const heading = (container && container.querySelector('h1,h2,h3,h4,h5,h6')) || null;

                results.push({
                    url: img.src,
                    alt: img.alt || `image-${index}`,
                    index,
                    category: catSlug,
                    heading: norm(txt(heading)),
                    element: 'img',
                    width: img.naturalWidth || img.width,
                    height: img.naturalHeight || img.height,
                    domPath: domPath(img)
                });
            });

            // CSS background-image
            document.querySelectorAll('*').forEach((el, idx) => {
                const cs = window.getComputedStyle(el);
                const bg = cs.backgroundImage;
                if (!bg || bg === 'none') return;
                const m = bg.match(/url\(["']?([^"')]+)["']?\)/);
                if (!m) return;
                const url = m[1];
                const container = nearestContainer(el);
                const catSlug = elSlugFrom(container);
                const heading = (container && container.querySelector('h1,h2,h3,h4,h5,h6')) || null;

                results.push({
                    url,
                    alt: `background-${idx}`,
                    index: 100000 + idx,
                    category: catSlug,
                    heading: norm(txt(heading)),
                    element: 'background',
                    width: el.offsetWidth,
                    height: el.offsetHeight,
                    domPath: domPath(el)
                });
            });

            return results;
        });

        console.log(`📸 Найдено ${imagesWithContext.length} изображений`);

        // Валидация URL
        const validImages = imagesWithContext.filter(img => {
            try {
                const url = new URL(img.url, targetUrl);
                return url.protocol === 'http:' || url.protocol === 'https:';
            } catch {
                return false;
            }
        });
        console.log(`✅ Валидных изображений: ${validImages.length}`);

        // Группируем по структурным категориям (section slug)
        const grouped = {};
        validImages.forEach(img => {
            const key = toSlug(img.category);
            if (!grouped[key]) grouped[key] = [];
            grouped[key].push(img);
        });

        console.log('\n📊 Группировка по ближайшему контейнеру:');
        Object.entries(grouped).forEach(([cat, list]) => {
            console.log(`  ${cat}: ${list.length}`);
        });

        // Скачиваем
        let downloaded = 0;
        const downloadResults = [];

        for (let i = 0; i < validImages.length; i++) {
            const img = validImages[i];
            const cat = toSlug(img.category);
            const catDir = path.join(assetsDir, cat);
            if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });

            try {
                console.log(`\n⬇️ ${i + 1}/${validImages.length}`);
                console.log(`   Категория: ${cat}`);
                console.log(`   DOM: ${img.domPath}`);

                const pageForDownload = await browser.newPage();
                const response = await pageForDownload.goto(img.url, { waitUntil: 'networkidle0' });
                const buffer = await response.buffer();
                await pageForDownload.close();

                let ext = 'jpg';
                const ct = response.headers()['content-type'];
                if (ct) {
                    if (ct.includes('png')) ext = 'png';
                    else if (ct.includes('gif')) ext = 'gif';
                    else if (ct.includes('webp')) ext = 'webp';
                    else if (ct.includes('svg')) ext = 'svg';
                    else if (ct.includes('jpeg')) ext = 'jpg';
                } else {
                    const m = img.url.match(/\.([a-zA-Z0-9]+)(?:\?|$)/);
                    if (m) ext = m[1].toLowerCase();
                }

                const safeAlt = (img.alt || 'image').replace(/[^a-zA-Z0-9а-яА-Я_\-]/g, '_').substring(0, 40);
                const fileName = `${img.element}_${safeAlt}_${img.index}.${ext}`;
                const filePath = path.join(catDir, fileName);

                fs.writeFileSync(filePath, buffer);
                downloaded++;

                downloadResults.push({
                    originalUrl: img.url,
                    fileName,
                    category: cat,
                    heading: img.heading,
                    element: img.element,
                    domPath: img.domPath,
                    width: img.width,
                    height: img.height,
                    filePath: path.relative(assetsDir, filePath),
                    size: buffer.length,
                    extension: ext
                });

                console.log(`✅ Сохранено: ${path.relative(assetsDir, filePath)}`);
                await new Promise(r => setTimeout(r, 150));
            } catch (e) {
                console.error(`❌ Ошибка скачивания: ${e.message}`);
            }
        }

        console.log(`\n🎉 Завершено! Скачано ${downloaded} из ${validImages.length}`);

        // Отчёт
        const reportPath = path.join(assetsDir, 'download-report.md');
        const report = `# Отчет о скачивании изображений (структурная классификация)\n\n` +
            `**Дата:** ${new Date().toLocaleString('ru-RU')}\n` +
            `**Сайт:** ${targetUrl}\n` +
            `**Всего найдено:** ${imagesWithContext.length}\n` +
            `**Валидных URL:** ${validImages.length}\n` +
            `**Успешно скачано:** ${downloaded}\n\n` +
            `## Группировка по контейнеру (slug)\n\n` +
            Object.entries(grouped).map(([cat, list]) => `### ${cat} (${list.length})\n` + list.map(i => `- ${i.element} ${i.alt} — ${i.domPath}`).join('\n')).join('\n\n') +
            `\n\n## Файлы\n\n` +
            downloadResults.map((r, idx) => `${idx + 1}. **${r.fileName}**\n   - Категория: ${r.category}\n   - Элемент: ${r.element}\n   - DOM: ${r.domPath}\n   - Путь: ${r.filePath}\n   - Размер: ${(r.size / 1024).toFixed(1)} KB\n   - URL: ${r.originalUrl}`).join('\n\n');
        fs.writeFileSync(reportPath, report, 'utf8');
        console.log(`📋 Отчет: ${reportPath}`);

        // Метаданные
        const metadataPath = path.join(assetsDir, 'images-metadata.json');
        const metadata = {
            downloadDate: new Date().toISOString(),
            site: targetUrl,
            totalFound: imagesWithContext.length,
            totalValid: validImages.length,
            totalDownloaded: downloaded,
            groupedByContainer: Object.fromEntries(Object.entries(grouped).map(([k, v]) => [k, v.length])),
            images: downloadResults
        };
        fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2), 'utf8');
        console.log(`📄 Метаданные: ${metadataPath}`);

    } catch (error) {
        console.error('❌ Произошла ошибка:', error);
    } finally {
        await browser.close();
        console.log('🔒 Браузер закрыт');
    }
}

scrapeImages().catch(console.error);
