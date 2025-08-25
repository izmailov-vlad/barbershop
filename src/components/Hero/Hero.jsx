import React from 'react'
import './Hero.css'
import { Button } from '../ui/Button'
import { COLORS } from '../../constants/colors'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title" style={{ color: COLORS.TEXT_PRIMARY }}>
                            Крутт<br />
                            <span style={{ fontSize: '0.8em', fontWeight: 'normal' }}>БАРБЕРШОП</span>
                        </h1>
                        <p className="hero-subtitle" style={{ color: COLORS.TEXT_SECONDARY }}>
                            Мужская парикмахерская с оригинальной концепцией.
                        </p>
                        <p className="hero-subtitle" style={{ color: COLORS.TEXT_SECONDARY }}>
                            Создаем свой стиль в атмосфере настоящего мужского клуба.
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
