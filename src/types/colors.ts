// Типы для цветовой палитры барбершопа "Крутт"

// Основные цвета
export type PrimaryColor = '#1a1a1a';
export type SecondaryColor = '#8B4513';
export type AccentColor = '#D4AF37';

// Цвета текста
export type TextPrimaryColor = '#FFFFFF';
export type TextSecondaryColor = '#CCCCCC';

// Цвета фона
export type BackgroundPrimaryColor = '#000000';
export type BackgroundSecondaryColor = '#1a1a1a';

// Цвета кнопок
export type ButtonPrimaryColor = '#D4AF37';
export type ButtonSecondaryColor = '#8B4513';
export type ButtonTextColor = '#000000';

// Цвета границ
export type BorderColor = '#333333';

// Цвета выделений
export type HighlightColor = '#FFD700';

// Состояния
export type HoverColor = '#B8941F';
export type ActiveColor = '#8B6F1A';
export type DisabledColor = '#666666';

// Системные цвета
export type SuccessColor = '#28a745';
export type ErrorColor = '#dc3545';
export type WarningColor = '#ffc107';
export type InfoColor = '#17a2b8';

// Объединение всех цветов
export type ColorPalette =
    | PrimaryColor
    | SecondaryColor
    | AccentColor
    | TextPrimaryColor
    | TextSecondaryColor
    | BackgroundPrimaryColor
    | BackgroundSecondaryColor
    | ButtonPrimaryColor
    | ButtonSecondaryColor
    | ButtonTextColor
    | BorderColor
    | HighlightColor
    | HoverColor
    | ActiveColor
    | DisabledColor
    | SuccessColor
    | ErrorColor
    | WarningColor
    | InfoColor;

// Интерфейс для объекта цветов
export interface Colors {
    // Основные цвета
    PRIMARY: PrimaryColor;
    SECONDARY: SecondaryColor;
    ACCENT: AccentColor;

    // Цвета текста
    TEXT_PRIMARY: TextPrimaryColor;
    TEXT_SECONDARY: TextSecondaryColor;

    // Цвета фона
    BG_PRIMARY: BackgroundPrimaryColor;
    BG_SECONDARY: BackgroundSecondaryColor;

    // Цвета кнопок
    BTN_PRIMARY: ButtonPrimaryColor;
    BTN_SECONDARY: ButtonSecondaryColor;
    BTN_TEXT: ButtonTextColor;

    // Цвета границ
    BORDER: BorderColor;

    // Цвета выделений
    HIGHLIGHT: HighlightColor;

    // Состояния
    HOVER: HoverColor;
    ACTIVE: ActiveColor;
    DISABLED: DisabledColor;

    // Системные цвета
    SUCCESS: SuccessColor;
    ERROR: ErrorColor;
    WARNING: WarningColor;
    INFO: InfoColor;
}

// Интерфейс для RGB значений
export interface ColorsRGB {
    PRIMARY: string;
    SECONDARY: string;
    ACCENT: string;
    TEXT_PRIMARY: string;
    TEXT_SECONDARY: string;
    BG_PRIMARY: string;
    BG_SECONDARY: string;
    BTN_PRIMARY: string;
    BTN_SECONDARY: string;
    BTN_TEXT: string;
    BORDER: string;
    HIGHLIGHT: string;
    HOVER: string;
    ACTIVE: string;
    DISABLED: string;
    SUCCESS: string;
    ERROR: string;
    WARNING: string;
    INFO: string;
}

// Интерфейс для утилит цветов
export interface ColorUtils {
    withOpacity: (color: keyof Colors, opacity: number) => string;
    darken: (color: keyof Colors | string, percent: number) => string;
    lighten: (color: keyof Colors | string, percent: number) => string;
    isLight: (color: keyof Colors | string) => boolean;
    getContrastText: (color: keyof Colors | string) => string;
}

// Интерфейс для темы
export interface Theme {
    colors: Colors;
    colorsRGB: ColorsRGB;
    utils: ColorUtils;
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };
    shadows: {
        small: string;
        medium: string;
        large: string;
        accent: string;
    };
    transitions: {
        fast: string;
        normal: string;
        slow: string;
    };
    borderRadius: {
        small: string;
        medium: string;
        large: string;
        round: string;
    };
}

// Типы для использования в компонентах
export type ColorVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning' | 'info';
export type TextColorVariant = 'primary' | 'secondary' | 'accent' | 'highlight';
export type BackgroundColorVariant = 'primary' | 'secondary' | 'accent';
export type ButtonColorVariant = 'primary' | 'secondary' | 'accent';

// Типы для прозрачности
export type Opacity = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;

// Типы для градиентов
export type GradientDirection = 'to right' | 'to left' | 'to top' | 'to bottom' | 'to top right' | 'to top left' | 'to bottom right' | 'to bottom left';

// Интерфейс для градиента
export interface Gradient {
    direction: GradientDirection;
    colors: ColorPalette[];
    stops?: number[];
}
