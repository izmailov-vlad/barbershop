#!/bin/bash

echo "🚀 Настройка проекта барбершопа 'КРУТТ'..."

# Проверяем наличие Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не установлен. Пожалуйста, установите Node.js версии 16 или выше."
    exit 1
fi

echo "✅ Node.js найден: $(node --version)"

# Проверяем наличие npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm не найден. Пожалуйста, установите npm."
    exit 1
fi

echo "✅ npm найден: $(npm --version)"

# Устанавливаем зависимости
echo "📦 Устанавливаем зависимости..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Зависимости установлены успешно"
else
    echo "❌ Ошибка при установке зависимостей"
    exit 1
fi

# Создаем папку assets если её нет
echo "📁 Создаем структуру папок..."
mkdir -p src/assets/{backgrounds,services,team,gallery,logo,icons,other}

echo "✅ Структура папок создана"

# Проверяем права на выполнение скриптов
echo "🔧 Настраиваем права на выполнение скриптов..."
chmod +x scripts/*.js

echo "✅ Настройка завершена!"
echo ""
echo "🎯 Следующие шаги:"
echo "1. Запустите скрапинг: npm run scrape-images"
echo "2. Обработайте изображения: npm run process-images"
echo "3. Или запустите оба скрипта: npm run images"
echo "4. Запустите проект: npm run dev"
echo ""
echo "📚 Дополнительная информация в README.md"
