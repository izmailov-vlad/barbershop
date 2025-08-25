import React from 'react'
import './Hero.css'
import { Button } from '../ui/Button'
import { getImageUrl } from '../../assets/images'

const Hero = () => {
    return (
        <section className="hero">
            {/* Главный заголовок и кнопки */}
            <div className="hero-header">
                <div className="container">
                    <h1 className="hero-title">
                        КРУТТ - ваш проводник в мир идеальной стрижки
                    </h1>

                    <div className="hero-actions">
                        <Button variant="primary" size="large">
                            Записаться
                        </Button>
                        <Button variant="secondary" size="large">
                            Услуги
                        </Button>
                    </div>
                </div>
            </div>

            {/* Три блока с изображениями */}
            <div className="hero-image-blocks">
                <div className="image-block">
                    <div className="image-container">
                        <img
                            src={getImageUrl('component-image__image/background_background-909_100909.webp')}
                            alt="Стрижка и стиль"
                            className="block-image"
                        />
                        <div className="image-overlay">
                            <div className="image-text">
                                <h3>Стрижка и стиль</h3>
                                <p>Создаем индивидуальный образ</p>
                            </div>
                            <div className="image-arrow">
                                <div className="arrow-circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="image-block">
                    <div className="image-container">
                        <img
                            src={getImageUrl('component-image__image/background_background-904_100904.webp')}
                            alt="Бритье и уход"
                            className="block-image"
                        />
                        <div className="image-overlay">
                            <div className="image-text">
                                <h3>Бритье и уход</h3>
                                <p>Профессиональные услуги</p>
                            </div>
                            <div className="image-arrow">
                                <div className="arrow-circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="image-block">
                    <div className="image-container">
                        <img
                            src={getImageUrl('component-image__image/background_background-899_100899.webp')}
                            alt="Атмосфера и комфорт"
                            className="block-image"
                        />
                        <div className="image-overlay">
                            <div className="image-text">
                                <h3>Атмосфера и комфорт</h3>
                                <p>Настоящий мужской клуб</p>
                            </div>
                            <div className="image-arrow">
                                <div className="arrow-circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
