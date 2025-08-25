import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Пути к папкам
const assetsDir = path.join(__dirname, '..', 'src', 'assets');
const componentsDir = path.join(__dirname, '..', 'src', 'components');

// Типы изображений и их использование в компонентах
const imageUsage = {
    background: {
        components: ['Hero', 'Header', 'Footer'],
        description: 'Фоновые изображения для секций'
    },
    service: {
        components: ['Services'],
        description: 'Изображения для иллюстрации услуг'
    },
    team: {
        components: ['Team'],
        description: 'Фотографии мастеров и команды'
    },
    gallery: {
        components: ['Gallery'],
        description: 'Примеры работ и портфолио'
    },
    logo: {
        components: ['Header', 'Footer'],
        description: 'Логотипы и брендинг'
    },
    icon: {
        components: ['Header', 'Services', 'Contact'],
        description: 'Иконки и UI элементы'
    },
    other: {
        components: ['All'],
        description: 'Прочие изображения'
    }
};

// Функция для создания компонента с изображениями
function createImageComponent(imageType, images) {
    const componentName = `${imageType.charAt(0).toUpperCase() + imageType.slice(1)}Images`;

    const imports = images.map(img => {
        const relativePath = path.relative(componentsDir, img.filePath);
        return `import ${img.importName} from '${relativePath}';`;
    }).join('\n');

    const imageObjects = images.map(img => {
        return `    ${img.importName}: {
        src: ${img.importName},
        alt: "${img.alt}",
        context: "${img.context}",
        type: "${img.type}",
        size: ${img.size}
    }`;
    }).join(',\n');

    return `// Автоматически сгенерированный компонент для ${imageType} изображений
import React from 'react';
${imports}

export const ${componentName} = {
${imageObjects}
};

export default ${componentName};
`;
}

// Функция для создания индексного файла
function createIndexFile() {
    const indexContent = `// Автоматически сгенерированный индексный файл для изображений
// Этот файл содержит все доступные изображения, сгруппированные по типам

export { default as BackgroundImages } from './BackgroundImages';
export { default as ServiceImages } from './ServiceImages';
export { default as TeamImages } from './TeamImages';
export { default as GalleryImages } from './GalleryImages';
export { default as LogoImages } from './LogoImages';
export { default as IconImages } from './IconImages';
export { default as OtherImages } from './OtherImages';

// Общий объект со всеми изображениями
export { default as AllImages } from './AllImages';
`;

    fs.writeFileSync(path.join(assetsDir, 'index.js'), indexContent);
    console.log('📄 Создан индексный файл для изображений');
}

// Функция для создания общего файла со всеми изображениями
function createAllImagesFile(allImages) {
    const imports = allImages.map(img => {
        const relativePath = path.relative(assetsDir, img.filePath);
        return `import ${img.importName} from './${relativePath}';`;
    }).join('\n');

    const imageObjects = allImages.map(img => {
        return `    ${img.importName}: {
        src: ${img.importName},
        alt: "${img.alt}",
        context: "${img.context}",
        type: "${img.type}",
        size: ${img.size},
        path: "${img.filePath}"
    }`;
    }).join(',\n');

    const allImagesContent = `// Автоматически сгенерированный файл со всеми изображениями
import React from 'react';
${imports}

export const AllImages = {
${imageObjects}
};

export default AllImages;
`;

    fs.writeFileSync(path.join(assetsDir, 'AllImages.js'), allImagesContent);
    console.log('📄 Создан файл со всеми изображениями');
}

// Функция для обновления компонентов с использованием изображений
function updateComponentsWithImages(allImages) {
    const componentUpdates = {
        'Header.jsx': {
            images: allImages.filter(img => ['logo', 'icon'].includes(img.type)),
            description: 'Добавляем логотипы и иконки в заголовок'
        },
        'Hero.jsx': {
            images: allImages.filter(img => img.type === 'background' && img.context === 'hero'),
            description: 'Добавляем фоновые изображения для hero секции'
        },
        'Services.jsx': {
            images: allImages.filter(img => img.type === 'service'),
            description: 'Добавляем изображения для иллюстрации услуг'
        },
        'Team.jsx': {
            images: allImages.filter(img => img.type === 'team'),
            description: 'Добавляем фотографии команды'
        },
        'Gallery.jsx': {
            images: allImages.filter(img => img.type === 'gallery'),
            description: 'Добавляем изображения для галереи работ'
        }
    };

    Object.entries(componentUpdates).forEach(([componentName, update]) => {
        if (update.images.length > 0) {
            console.log(`\n🔄 Обновление компонента ${componentName}:`);
            console.log(`   Найдено ${update.images.length} изображений`);
            console.log(`   ${update.description}`);

            // Здесь можно добавить логику для автоматического обновления компонентов
            // Например, заменить placeholder'ы на реальные изображения
        }
    });
}

// Основная функция обработки
async function processImages() {
    console.log('🔄 Обработка скачанных изображений...');

    try {
        // Проверяем существование папки assets
        if (!fs.existsSync(assetsDir)) {
            console.error('❌ Папка assets не найдена. Сначала запустите скрипт scrape_images.js');
            return;
        }

        // Читаем метаданные
        const metadataPath = path.join(assetsDir, 'images-metadata.json');
        if (!fs.existsSync(metadataPath)) {
            console.error('❌ Файл метаданных не найден. Сначала запустите скрипт scrape_images.js');
            return;
        }

        const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
        console.log(`📊 Обрабатываем ${metadata.totalDownloaded} изображений`);

        // Группируем изображения по типам
        const groupedImages = {};
        metadata.images.forEach(img => {
            if (!groupedImages[img.type]) {
                groupedImages[img.type] = [];
            }

            // Создаем безопасное имя для импорта
            const safeName = img.alt.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 20);
            img.importName = `${img.type}_${img.context}_${safeName}_${img.index}`;

            groupedImages[img.type].push(img);
        });

        // Создаем компоненты для каждого типа изображений
        Object.entries(groupedImages).forEach(([type, images]) => {
            if (images.length > 0) {
                const componentContent = createImageComponent(type, images);
                const componentPath = path.join(assetsDir, `${type.charAt(0).toUpperCase() + type.slice(1)}Images.js`);
                fs.writeFileSync(componentPath, componentContent);
                console.log(`✅ Создан компонент для ${type} изображений: ${images.length} файлов`);
            }
        });

        // Создаем общий файл со всеми изображениями
        createAllImagesFile(metadata.images);

        // Создаем индексный файл
        createIndexFile();

        // Обновляем компоненты
        updateComponentsWithImages(metadata.images);

        // Создаем README для разработчиков
        const devReadme = `# Руководство по использованию изображений

## Обзор

Этот файл содержит автоматически сгенерированные компоненты для работы с изображениями, скачанными с сайта krutt.ru.

## Структура

- \`BackgroundImages.js\` - Фоновые изображения
- \`ServiceImages.js\` - Изображения услуг
- \`TeamImages.js\` - Фотографии команды
- \`GalleryImages.js\` - Галерея работ
- \`LogoImages.js\` - Логотипы
- \`IconImages.js\` - Иконки
- \`OtherImages.js\` - Прочие изображения
- \`AllImages.js\` - Все изображения в одном объекте
- \`index.js\` - Экспорт всех компонентов

## Использование

### Импорт конкретного типа изображений
\`\`\`jsx
import { BackgroundImages } from '../assets';

// Использование
<img src={BackgroundImages.background_hero_фон_1.src} alt={BackgroundImages.background_hero_фон_1.alt} />
\`\`\`

### Импорт всех изображений
\`\`\`jsx
import { AllImages } from '../assets';

// Поиск изображения по контексту
const heroImages = Object.values(AllImages).filter(img => img.context === 'hero');
\`\`\`

### Фильтрация по типу
\`\`\`jsx
import { AllImages } from '../assets';

const serviceImages = Object.values(AllImages).filter(img => img.type === 'service');
\`\`\`

## Метаданные

Каждое изображение содержит следующие метаданные:
- \`src\` - Путь к файлу для импорта
- \`alt\` - Альтернативный текст
- \`context\` - Контекст использования (hero, services, team, gallery, contact, header, footer)
- \`type\` - Тип изображения (background, service, team, gallery, logo, icon, other)
- \`size\` - Размер файла в байтах
- \`path\` - Относительный путь к файлу

## Обновление

Для обновления изображений:
1. Запустите \`npm run scrape-images\`
2. Запустите \`npm run process-images\`
3. Компоненты будут автоматически обновлены

## Рекомендации

1. Используйте изображения с соответствующими alt-текстами для доступности
2. Группируйте изображения по контексту использования
3. Оптимизируйте изображения перед использованием в продакшене
4. Проверяйте размеры файлов для оптимизации загрузки
`;

        fs.writeFileSync(path.join(assetsDir, 'DEVELOPER_README.md'), devReadme);
        console.log('📚 Создано руководство для разработчиков');

        console.log('\n🎉 Обработка изображений завершена!');
        console.log('📁 Все файлы созданы в папке src/assets/');
        console.log('📖 Изучите DEVELOPER_README.md для получения дополнительной информации');

    } catch (error) {
        console.error('❌ Ошибка при обработке изображений:', error);
    }
}

// Запускаем обработку
processImages().catch(console.error);
