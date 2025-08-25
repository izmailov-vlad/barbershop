import React from 'react'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            ДЕЛАЕМ ОТЛИЧНЫЕ<br />
                            МУЖСКИЕ СТРИЖКИ
                        </h1>
                        <p className="hero-subtitle">
                            Мужская парикмахерская с оригинальной концепцией. Создаем свой стиль
                        </p>
                        <div className="hero-badge">
                            <span>Каждая 8 стрижка - бесплатно</span>
                        </div>
                        <div className="hero-actions">
                            <button className="btn btn-primary btn-large">Услуги</button>
                            <button className="btn btn-secondary btn-large">Записаться на стрижку</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="hero-placeholder">
                            <span>Фото интерьера</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
