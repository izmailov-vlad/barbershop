# 🚀 Быстрый старт

## 1. Установка зависимостей

```bash
npm install
```

## 2. Скрапинг изображений

```bash
# Скачать изображения с krutt.ru
npm run scrape-images

# Обработать и организовать изображения
npm run process-images

# Или оба скрипта сразу
npm run images
```

## 3. Запуск проекта

```bash
npm run dev
```

## 📁 Что создается автоматически

После запуска скриптов в `src/assets/` будут созданы:

- **backgrounds/** - Фоновые изображения
- **services/** - Изображения услуг  
- **team/** - Фотографии команды
- **gallery/** - Галерея работ
- **logo/** - Логотипы
- **icons/** - Иконки
- **other/** - Прочие изображения

## 🎯 Использование в компонентах

```jsx
import { BackgroundImages, ServiceImages } from '../assets';

// Фоновое изображение
<div style={{ backgroundImage: `url(${BackgroundImages.background_hero_фон_1.src})` }} />

// Изображение услуги
<img src={ServiceImages.service_services_стрижка_0.src} alt="Стрижка" />
```

## ⚡ Альтернативный запуск

```bash
# Настройка и запуск всего проекта
chmod +x scripts/setup.sh
./scripts/setup.sh
```

## 📚 Подробная документация

- `README.md` - Полное описание проекта
- `src/constants/README.md` - Документация по цветам
- `src/assets/README.md` - Руководство по изображениям
