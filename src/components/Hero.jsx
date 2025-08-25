import React from 'react'
import { COLORS } from '../constants/colors'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title" style={{ color: COLORS.TEXT_PRIMARY }}>
                            ДЕЛАЕМ ОТЛИЧНЫЕ<br />
                            МУЖСКИЕ СТРИЖКИ
                        </h1>
                        <p className="hero-subtitle" style={{ color: COLORS.TEXT_SECONDARY }}>
                            Мужская парикмахерская с оригинальной концепцией. Создаем свой стиль
                        </p>
                        <p className="hero-badge-text" style={{
                            color: COLORS.ACCENT
                        }}>
                            Каждая 8 стрижка - бесплатно
                        </p>
                        <div className="hero-actions">
                            <button
                                className="btn btn-primary btn-large"
                                style={{
                                    backgroundColor: COLORS.BTN_PRIMARY,
                                    color: COLORS.BTN_TEXT
                                }}
                            >
                                Услуги
                            </button>
                            <button
                                className="btn btn-secondary btn-large"
                                style={{
                                    color: COLORS.BTN_PRIMARY,
                                    borderColor: COLORS.BTN_PRIMARY
                                }}
                            >
                                Записаться на стрижку
                            </button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="hero-placeholder" style={{
                            backgroundColor: COLORS.BORDER,
                            color: COLORS.TEXT_SECONDARY
                        }}>
                            <span>Фото интерьера</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
