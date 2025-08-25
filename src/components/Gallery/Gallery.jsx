import React from 'react'
import './Gallery.css'
import { COLORS } from '../../constants/colors'
import { Button } from '../ui/Button'

const Gallery = () => {
    const galleryItems = [
        { id: 1, title: 'Стрижка "Крутт"', category: 'Мужские стрижки' },
        { id: 2, title: 'Модельная стрижка', category: 'Мужские стрижки' },
        { id: 3, title: 'Стрижка и борода', category: 'Комплексные услуги' },
        { id: 4, title: 'Детская стрижка', category: 'Детские стрижки' },
        { id: 5, title: 'Королевское бритьё', category: 'Бритьё' },
        { id: 6, title: 'Моделирование бороды', category: 'Уход за бородой' }
    ]

    return (
        <section id="gallery" className="gallery">
            <div className="container">
                <div className="section-header">
                    <h2 style={{ color: COLORS.TEXT_PRIMARY }}>Стрижки наших постоянных посетителей</h2>
                    <p style={{ color: COLORS.TEXT_SECONDARY }}>Записаться к нам по телефону: <a href="tel:+79936380008" style={{ color: COLORS.ACCENT }}>+7 (993) 638-00-08</a></p>
                </div>

                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="gallery-item">
                            <div className="gallery-placeholder" style={{
                                backgroundColor: COLORS.BORDER,
                                color: COLORS.TEXT_SECONDARY
                            }}>
                                <span>Фото работы</span>
                                <div className="gallery-overlay" style={{ color: COLORS.TEXT_PRIMARY }}>
                                    <h4>{item.title}</h4>
                                    <p>{item.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gallery-cta" style={{ backgroundColor: COLORS.BG_SECONDARY }}>
                    <h3 style={{ color: COLORS.TEXT_PRIMARY }}>Приезжайте к нам в гости!</h3>
                    <p style={{ color: COLORS.TEXT_SECONDARY }}>Встретим вас, предложим напитки, сделаем крутую стрижку и пообщаемся на мужские темы</p>
                    <Button variant="primary" size="large">
                        Записаться на стрижку
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Gallery
