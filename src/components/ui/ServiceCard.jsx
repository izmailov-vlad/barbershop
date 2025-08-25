import React from 'react'
import { COLORS } from '../../constants/colors'

export const ServiceCard = ({
    name,
    price,
    description,
    className,
    style,
}) => {
    return (
        <div
            className={className ? `service-item ${className}` : 'service-item'}
            style={{
                borderColor: COLORS.BORDER,
                backgroundColor: COLORS.BG_SECONDARY,
                ...style,
            }}
        >
            <div className="service-header">
                <h4 style={{ color: COLORS.TEXT_PRIMARY }}>{name}</h4>
                {price ? (
                    <span className="service-price" style={{ color: COLORS.ACCENT }}>
                        {price}
                    </span>
                ) : null}
            </div>
            {description ? (
                <p style={{ color: COLORS.TEXT_SECONDARY }}>{description}</p>
            ) : null}
        </div>
    )
}

export default ServiceCard


