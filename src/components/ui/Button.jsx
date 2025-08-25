import React, { useState } from 'react'
import { COLORS, theme, colorUtils } from '../../constants/colors'

const VARIANTS = {
    primary: ({ disabled }) => ({
        backgroundColor: disabled ? COLORS.DISABLED : COLORS.BTN_PRIMARY,
        color: COLORS.BTN_TEXT,
        borderColor: disabled ? COLORS.DISABLED : COLORS.BTN_PRIMARY,
    }),
    secondary: ({ disabled }) => ({
        backgroundColor: 'transparent',
        color: disabled ? COLORS.DISABLED : COLORS.BTN_PRIMARY,
        borderColor: disabled ? COLORS.DISABLED : COLORS.BTN_PRIMARY,
    }),
    accent: ({ disabled }) => ({
        backgroundColor: disabled ? COLORS.DISABLED : COLORS.ACCENT,
        color: COLORS.BTN_TEXT,
        borderColor: disabled ? COLORS.DISABLED : COLORS.ACCENT,
    }),
    ghost: ({ disabled }) => ({
        backgroundColor: 'transparent',
        color: disabled ? COLORS.DISABLED : COLORS.TEXT_PRIMARY,
        borderColor: 'transparent',
    }),
}

const SIZES = {
    small: {
        fontSize: '14px',
        padding: '8px 14px',
    },
    medium: {
        fontSize: '16px',
        padding: '10px 18px',
    },
    large: {
        fontSize: '18px',
        padding: '12px 24px',
    },
}

const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: theme.borderRadius.button,
    cursor: 'pointer',
    transition: theme.transitions.button,
    textDecoration: 'none',
    lineHeight: 1.2,
    userSelect: 'none',
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    disabled = false,
    type = 'button',
    onClick,
    className,
    style,
    ...rest
}) => {
    const [isHovered, setIsHovered] = useState(false)
    const variantStyle = (VARIANTS[variant] || VARIANTS.primary)({ disabled })
    const sizeStyle = SIZES[size] || SIZES.medium

    const getHoverStyle = () => {
        if (disabled) return {}
        switch (variant) {
            case 'secondary':
                return {
                    backgroundColor: COLORS.ACCENT,
                    borderColor: COLORS.ACCENT,
                    color: COLORS.BTN_TEXT,
                }
            default:
                return {}
        }
    }

    const combinedStyle = {
        ...baseStyle,
        ...sizeStyle,
        ...variantStyle,
        width: fullWidth ? '100%' : 'auto',
        opacity: disabled ? 0.7 : 1,
        boxShadow: 'none',
        ...(isHovered ? getHoverStyle() : {}),
        ...style,
    }

    return (
        <button
            type={type}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            className={className}
            style={combinedStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button


