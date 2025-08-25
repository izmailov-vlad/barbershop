// Цветовая палитра барбершопа "Крутт"
// Основные цвета бренда
export const COLORS = {
    // Основные цвета
    PRIMARY: '#1a1a1a',
    SECONDARY: '#8B4513',
    ACCENT: '#D4AF37',

    // Цвета текста
    TEXT_PRIMARY: '#FFFFFF',
    TEXT_SECONDARY: '#CCCCCC',

    // Цвета фона
    BG_PRIMARY: '#000000',
    BG_SECONDARY: '#1a1a1a',

    // Цвета кнопок
    BTN_PRIMARY: '#D4AF37',
    BTN_SECONDARY: '#8B4513',
    BTN_TEXT: '#000000',

    // Цвета границ
    BORDER: '#333333',

    // Цвета выделений
    HIGHLIGHT: '#FFD700',

    // Состояния
    HOVER: '#B8941F',
    ACTIVE: '#8B6F1A',
    DISABLED: '#666666',

    // Системные цвета
    SUCCESS: '#28a745',
    ERROR: '#dc3545',
    WARNING: '#ffc107',
    INFO: '#17a2b8',
};

// RGB значения для использования с прозрачностью
export const COLORS_RGB = {
    PRIMARY: '26, 26, 26',
    SECONDARY: '139, 69, 19',
    ACCENT: '212, 175, 55',
    TEXT_PRIMARY: '255, 255, 255',
    TEXT_SECONDARY: '204, 204, 204',
    BG_PRIMARY: '0, 0, 0',
    BG_SECONDARY: '26, 26, 26',
    BTN_PRIMARY: '212, 175, 55',
    BTN_SECONDARY: '139, 69, 19',
    BTN_TEXT: '0, 0, 0',
    BORDER: '51, 51, 51',
    HIGHLIGHT: '255, 215, 0',
    HOVER: '184, 148, 31',
    ACTIVE: '139, 111, 26',
    DISABLED: '102, 102, 102',
    SUCCESS: '40, 167, 69',
    ERROR: '220, 53, 69',
    WARNING: '255, 193, 7',
    INFO: '23, 162, 184',
};

// Функции для работы с цветами
export const colorUtils = {
    // Получить цвет с прозрачностью
    withOpacity: (color, opacity) => {
        const rgb = COLORS_RGB[color] || color;
        return `rgba(${rgb}, ${opacity})`;
    },

    // Получить затемненный цвет
    darken: (color, percent) => {
        // Простая логика затемнения для HEX цветов
        const hex = COLORS[color] || color;
        if (hex.startsWith('#')) {
            const num = parseInt(hex.replace('#', ''), 16);
            const amt = Math.round(2.55 * percent);
            const R = (num >> 16) - amt;
            const G = (num >> 8 & 0x00FF) - amt;
            const B = (num & 0x0000FF) - amt;
            return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
                (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
                (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
        }
        return color;
    },

    // Получить осветленный цвет
    lighten: (color, percent) => {
        const hex = COLORS[color] || color;
        if (hex.startsWith('#')) {
            const num = parseInt(hex.replace('#', ''), 16);
            const amt = Math.round(2.55 * percent);
            const R = (num >> 16) + amt;
            const G = (num >> 8 & 0x00FF) + amt;
            const B = (num & 0x0000FF) + amt;
            return '#' + (0x1000000 + (R > 255 ? 255 : R) * 0x10000 +
                (G > 255 ? 255 : G) * 0x100 +
                (B > 255 ? 255 : B)).toString(16).slice(1);
        }
        return color;
    },

    // Проверить, является ли цвет светлым
    isLight: (color) => {
        const hex = COLORS[color] || color;
        if (hex.startsWith('#')) {
            const num = parseInt(hex.replace('#', ''), 16);
            const R = num >> 16;
            const G = num >> 8 & 0x00FF;
            const B = num & 0x0000FF;
            const brightness = (R * 299 + G * 587 + B * 114) / 1000;
            return brightness > 128;
        }
        return false;
    },

    // Получить контрастный цвет для текста
    getContrastText: (color) => {
        return colorUtils.isLight(color) ? COLORS.TEXT_PRIMARY : COLORS.TEXT_SECONDARY;
    },

    // Получить градиент
    getGradient: (color1, color2, direction = 'to right') => {
        const c1 = COLORS[color1] || color1;
        const c2 = COLORS[color2] || color2;
        return `linear-gradient(${direction}, ${c1}, ${c2})`;
    },

    // Получить тень с цветом
    getShadow: (color, blur = '4px', spread = '0px', opacity = 0.3) => {
        const rgb = COLORS_RGB[color] || color;
        return `0 2px ${blur} ${spread} rgba(${rgb}, ${opacity})`;
    },

    // Получить цвет с прозрачностью для CSS переменных
    getCSSVariable: (colorName, opacity = 1) => {
        if (opacity === 1) {
            return `var(--color-${colorName.toLowerCase()})`;
        }
        return `rgba(var(--color-${colorName.toLowerCase()}-rgb), ${opacity})`;
    }
};

// Тема для styled-components или других CSS-in-JS решений
export const theme = {
    colors: COLORS,
    colorsRGB: COLORS_RGB,
    utils: colorUtils,

    // Размеры
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
    },

    // Тени
    shadows: {
        small: `0 2px 4px rgba(${COLORS_RGB.PRIMARY}, 0.1)`,
        medium: `0 4px 8px rgba(${COLORS_RGB.PRIMARY}, 0.15)`,
        large: `0 8px 16px rgba(${COLORS_RGB.PRIMARY}, 0.2)`,
        accent: `0 4px 8px rgba(${COLORS_RGB.ACCENT}, 0.3)`,
        button: `0 4px 12px rgba(${COLORS_RGB.ACCENT}, 0.3)`,
        card: `0 8px 25px rgba(${COLORS_RGB.ACCENT}, 0.2)`,
    },

    // Переходы
    transitions: {
        fast: '0.15s ease',
        normal: '0.3s ease',
        slow: '0.5s ease',
        button: 'all 0.3s ease',
        hover: 'all 0.3s ease',
    },

    // Границы
    borderRadius: {
        small: '4px',
        medium: '8px',
        large: '16px',
        round: '50%',
        button: '6px',
        card: '8px',
    },

    // Анимации
    animations: {
        pulse: 'pulse 2s infinite',
        fadeIn: 'fadeIn 0.5s ease-in',
        slideUp: 'slideUp 0.3s ease-out',
        scale: 'scale 0.2s ease-in-out',
    }
};

// CSS переменные для использования в стилях
export const cssVariables = {
    '--color-primary': COLORS.PRIMARY,
    '--color-secondary': COLORS.SECONDARY,
    '--color-accent': COLORS.ACCENT,
    '--color-text-primary': COLORS.TEXT_PRIMARY,
    '--color-text-secondary': COLORS.TEXT_SECONDARY,
    '--color-bg-primary': COLORS.BG_PRIMARY,
    '--color-bg-secondary': COLORS.BG_SECONDARY,
    '--color-btn-primary': COLORS.BTN_PRIMARY,
    '--color-btn-secondary': COLORS.BTN_SECONDARY,
    '--color-btn-text': COLORS.BTN_TEXT,
    '--color-border': COLORS.BORDER,
    '--color-highlight': COLORS.HIGHLIGHT,
    '--color-hover': COLORS.HOVER,
    '--color-active': COLORS.ACTIVE,
    '--color-disabled': COLORS.DISABLED,
    '--color-success': COLORS.SUCCESS,
    '--color-error': COLORS.ERROR,
    '--color-warning': COLORS.WARNING,
    '--color-info': COLORS.INFO,
};

export default COLORS;
