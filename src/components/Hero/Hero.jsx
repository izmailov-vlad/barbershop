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
                    <h1 className="hero-title">
                        <span className="hero-title-main">Крутт</span>
                        <span className="hero-title-sub">Барбершоп</span>
                    </h1>

                    <p className="hero-description">
                        Мужская парикмахерская с оригинальной концепцией.
                        Создаем свой стиль в атмосфере настоящего мужского клуба.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary">Записаться на стрижку</button>
                        <button className="btn btn-secondary">Услуги и цены</button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Hero
