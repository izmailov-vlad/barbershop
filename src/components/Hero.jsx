import React from 'react'
import { COLORS } from '../constants/colors'
import { Button } from './ui/Button'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title" style={{ color: COLORS.TEXT_PRIMARY }}>
                            Делаем отличные<br />
                            мужские стрижки
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
                            <Button variant="primary" size="large">
                                Записаться на стрижку
                            </Button>
                            <Button variant="secondary" size="large">
                                Услуги
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
