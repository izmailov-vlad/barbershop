import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '..', 'src', 'assets');
const metadataPath = path.join(assetsDir, 'images-metadata.json');

function hashFile(filePath) {
    try {
        const buf = fs.readFileSync(filePath);
        return crypto.createHash('md5').update(buf).digest('hex');
    } catch {
        return null;
    }
}

function safeUnlink(filePath) {
    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            return true;
        }
    } catch { }
    return false;
}

function isTechnicalCategory(cat) {
    // Категории, созданные из низкоуровневых контейнеров Flexbe/служебных слоёв
    return ['layer', 'component-image__image', 'flexbe-card', 'is-view'].includes(cat);
}

function shouldRemoveByHeuristics(item) {
    // 1) Очень маленькие файлы (тех иконки/пиксели)
    if (item.size !== undefined && item.size < 1024) return true; // < 1KB
    if ((item.width || 0) <= 16 && (item.height || 0) <= 16) return true;

    // 2) Слишком маленькие фоновые/фоноподобные
    const area = (item.width || 0) * (item.height || 0);
    if (item.element === 'background' && area < 200 * 120) return true;

    // 3) SVG иконки в технических контейнерах
    if (item.extension === 'svg' && isTechnicalCategory(item.category)) return true;

    return false;
}

async function main() {
    if (!fs.existsSync(metadataPath)) {
        console.error('❌ Не найден файл метаданных:', metadataPath);
        process.exit(1);
    }

    const metaRaw = fs.readFileSync(metadataPath, 'utf8');
    const metadata = JSON.parse(metaRaw);

    const images = metadata.images || [];

    // Группировка по оригинальному URL: оставляем самый крупный (по размеру)
    const byUrl = new Map();
    for (const img of images) {
        const key = img.originalUrl || `${img.filePath}`;
        if (!byUrl.has(key)) byUrl.set(key, []);
        byUrl.get(key).push(img);
    }

    const keepSet = new Set();
    const deleteSet = new Set();

    // 1) Удаляем дубликаты по URL (оставляем самый большой size)
    for (const [key, list] of byUrl.entries()) {
        if (list.length === 1) {
            keepSet.add(list[0].filePath);
            continue;
        }
        const sorted = [...list].sort((a, b) => (b.size || 0) - (a.size || 0));
        // keep the largest
        keepSet.add(sorted[0].filePath);
        // delete rest
        for (let i = 1; i < sorted.length; i++) deleteSet.add(sorted[i].filePath);
    }

    // 2) Удаляем технический мусор по эвристикам
    for (const img of images) {
        if (deleteSet.has(img.filePath)) continue;
        if (shouldRemoveByHeuristics(img)) {
            deleteSet.add(img.filePath);
        }
    }

    // 3) Если в папке категория техническая (flexbe/layer etc.), оставляем только самые большие файлы, удаляем прочее как дубли/мелкие
    const byCategory = new Map();
    for (const img of images) {
        if (!byCategory.has(img.category)) byCategory.set(img.category, []);
        byCategory.get(img.category).push(img);
    }

    for (const [cat, list] of byCategory.entries()) {
        if (!isTechnicalCategory(cat)) continue;
        // оставим топ-5 по размеру как потенциально полезные
        const sorted = [...list].sort((a, b) => (b.size || 0) - (a.size || 0));
        const keepTop = new Set(sorted.slice(0, 5).map(i => i.filePath));
        for (const img of list) {
            if (!keepTop.has(img.filePath)) deleteSet.add(img.filePath);
        }
    }

    // 4) Удаляем точные дубликаты по хэшу
    const byHash = new Map();
    for (const img of images) {
        if (deleteSet.has(img.filePath)) continue;
        const abs = path.join(assetsDir, img.filePath);
        const h = hashFile(abs);
        if (!h) continue;
        if (!byHash.has(h)) byHash.set(h, []);
        byHash.get(h).push(img);
    }
    for (const [h, list] of byHash.entries()) {
        if (list.length <= 1) continue;
        // оставим самый большой
        const sorted = [...list].sort((a, b) => (b.size || 0) - (a.size || 0));
        for (let i = 1; i < sorted.length; i++) deleteSet.add(sorted[i].filePath);
        keepSet.add(sorted[0].filePath);
    }

    // Итоговые списки к удалению (не удаляем то, что решено оставить)
    const finalDelete = [...deleteSet].filter(fp => !keepSet.has(fp));

    // Удаление
    let removed = 0;
    const removedLog = [];
    for (const rel of finalDelete) {
        const abs = path.join(assetsDir, rel);
        if (safeUnlink(abs)) {
            removed++;
            removedLog.push(rel);
        }
    }

    // Обновляем метаданные: фильтруем удалённые
    const keptImages = images.filter(i => !finalDelete.includes(i.filePath));
    const newMetadata = {
        ...metadata,
        totalDownloaded: keptImages.length,
        images: keptImages
    };
    fs.writeFileSync(metadataPath, JSON.stringify(newMetadata, null, 2), 'utf8');

    // Сводка
    const summaryPath = path.join(assetsDir, 'cleanup-report.md');
    const summary = `# Отчёт очистки ассетов\n\nУдалено файлов: ${removed}\nОставлено файлов: ${keptImages.length}\n\n## Удалённые файлы\n\n${removedLog.map(p => `- ${p}`).join('\n')}`;
    fs.writeFileSync(summaryPath, summary, 'utf8');

    console.log(`🧹 Очистка завершена. Удалено: ${removed}. Отчёт: ${summaryPath}`);
}

main().catch(err => {
    console.error('❌ Ошибка очистки:', err);
    process.exit(1);
});
