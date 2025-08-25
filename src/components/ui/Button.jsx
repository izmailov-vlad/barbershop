import React from 'react'

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
    const variantClass = (() => {
        switch (variant) {
            case 'secondary':
                return 'btn-secondary'
            case 'accent':
                return 'btn-accent'
            case 'primary':
            default:
                return 'btn-primary'
        }
    })()

    const sizeClass = (() => {
        // В глобальных стилях есть класс только для large
        if (size === 'large') return 'btn-large'
        return ''
    })()

    const classes = [
        'btn',
        variantClass,
        sizeClass,
        fullWidth ? 'w-full' : '',
        className || '',
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <button
            type={type}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            className={classes}
            style={style}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button


