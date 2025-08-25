# Цветовая палитра барбершопа "Крутт"

Этот файл содержит инструкции по использованию цветовой палитры, основанной на дизайне сайта https://krutt.ru/.

## Структура файлов

- `colors.css` - CSS переменные и утилитарные классы
- `_colors.scss` - SCSS переменные и миксины
- `../constants/colors.js` - JavaScript константы и утилиты
- `../types/colors.ts` - TypeScript типы и интерфейсы

## Основные цвета

### Брендинг
- **Primary** (`#1a1a1a`) - Основной темный цвет
- **Secondary** (`#8B4513`) - Коричневый цвет в стиле барбершопа
- **Accent** (`#D4AF37`) - Золотистый акцентный цвет

### Текст
- **Text Primary** (`#FFFFFF`) - Основной текст (белый)
- **Text Secondary** (`#CCCCCC`) - Вторичный текст (светло-серый)

### Фон
- **Background Primary** (`#000000`) - Основной фон (черный)
- **Background Secondary** (`#1a1a1a`) - Вторичный фон (темно-серый)

### Кнопки
- **Button Primary** (`#D4AF37`) - Основные кнопки (золотистые)
- **Button Secondary** (`#8B4513`) - Вторичные кнопки (коричневые)
- **Button Text** (`#000000`) - Текст на кнопках (черный)

## Использование

### CSS переменные

```css
.my-component {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}
```

### SCSS переменные

```scss
.my-component {
  background-color: $color-bg-primary;
  color: $color-text-primary;
  border: 1px solid $color-border;
}
```

### JavaScript/React

```jsx
import { COLORS } from '../constants/colors';

const MyComponent = () => (
  <div style={{ 
    backgroundColor: COLORS.BG_PRIMARY,
    color: COLORS.TEXT_PRIMARY 
  }}>
    Содержимое
  </div>
);
```

### Утилитарные классы

```html
<div class="bg-primary text-primary">
  <button class="btn-primary">Кнопка</button>
  <span class="text-accent">Акцентный текст</span>
</div>
```

## Миксины SCSS

### Кнопки

```scss
.my-button {
  @include button-style($color-btn-primary);
}
```

### Цвета

```scss
.my-element {
  @include text-color($color-text-primary);
  @include bg-color($color-bg-secondary);
  @include border-color($color-border);
}
```

### Эффекты

```scss
.my-element {
  @include hover-effect($color-hover);
  @include shadow-primary;
  @include gradient-accent;
}
```

## Утилиты JavaScript

### Прозрачность

```javascript
import { colorUtils } from '../constants/colors';

const semiTransparent = colorUtils.withOpacity('ACCENT', 0.5);
```

### Затемнение/осветление

```javascript
const darker = colorUtils.darken('ACCENT', 20); // На 20% темнее
const lighter = colorUtils.lighten('ACCENT', 20); // На 20% светлее
```

### Контрастный текст

```javascript
const textColor = colorUtils.getContrastText('ACCENT');
```

## Состояния

### Hover
- **Hover** (`#B8941F`) - Цвет при наведении

### Active
- **Active** (`#8B6F1A`) - Цвет при активации

### Disabled
- **Disabled** (`#666666`) - Цвет для отключенных элементов

## Системные цвета

- **Success** (`#28a745`) - Успех
- **Error** (`#dc3545`) - Ошибка
- **Warning** (`#ffc107`) - Предупреждение
- **Info** (`#17a2b8`) - Информация

## Доступность

Цветовая схема обеспечивает высокий контраст между темным фоном и светлым текстом, что соответствует стандартам WCAG 2.1.

## Рекомендации

1. Используйте основные цвета для ключевых элементов
2. Применяйте акцентные цвета для призывов к действию
3. Обеспечивайте достаточный контраст для читаемости
4. Используйте системные цвета для соответствующих состояний
5. Применяйте утилитарные классы для быстрого стилизования

## Примеры компонентов

### Кнопка

```jsx
import { COLORS } from '../constants/colors';

const Button = ({ variant = 'primary', children, ...props }) => {
  const buttonStyle = {
    backgroundColor: COLORS[`BTN_${variant.toUpperCase()}`],
    color: variant === 'primary' ? COLORS.BTN_TEXT : COLORS.TEXT_PRIMARY,
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  return (
    <button style={buttonStyle} {...props}>
      {children}
    </button>
  );
};
```

### Карточка

```jsx
const Card = ({ children }) => (
  <div style={{
    backgroundColor: COLORS.BG_SECONDARY,
    border: `1px solid ${COLORS.BORDER}`,
    borderRadius: '12px',
    padding: '24px',
    boxShadow: `0 4px 8px rgba(${COLORS_RGB.PRIMARY}, 0.15)`
  }}>
    {children}
  </div>
);
```
