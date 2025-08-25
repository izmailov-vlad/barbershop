import React, { useState } from 'react'
import './Contact.css'
import { COLORS } from '../../constants/colors'
import { Button } from '../ui/Button'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Здесь будет логика отправки формы
        console.log('Form submitted:', formData)
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2 style={{ color: COLORS.TEXT_PRIMARY }}>Контакты и карта</h2>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <h3 style={{ color: COLORS.TEXT_PRIMARY }}>Адрес</h3>
                            <p style={{ color: COLORS.TEXT_SECONDARY }}>г. Санкт-Петербург, Тосина 6<br />(около 8 парадной)</p>
                        </div>

                        <div className="contact-item">
                            <h3 style={{ color: COLORS.TEXT_PRIMARY }}>Телефон</h3>
                            <p style={{ color: COLORS.TEXT_SECONDARY }}><a href="tel:+79936380008" style={{ color: COLORS.ACCENT }}>+7 (993) 638-00-08</a></p>
                        </div>

                        <div className="contact-item">
                            <h3 style={{ color: COLORS.TEXT_PRIMARY }}>Email</h3>
                            <p style={{ color: COLORS.TEXT_SECONDARY }}><a href="mailto:krutt.barbershop@yandex.ru" style={{ color: COLORS.ACCENT }}>krutt.barbershop@yandex.ru</a></p>
                        </div>

                        <div className="contact-item">
                            <h3 style={{ color: COLORS.TEXT_PRIMARY }}>Режим работы</h3>
                            <p style={{ color: COLORS.TEXT_SECONDARY }}>Пн-Вс: 10:00 - 22:00</p>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h3 style={{ color: COLORS.TEXT_PRIMARY }}>Записаться на стрижку</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name" style={{ color: COLORS.TEXT_PRIMARY }}>Имя</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    style={{
                                        borderColor: COLORS.BORDER,
                                        backgroundColor: COLORS.BG_PRIMARY,
                                        color: COLORS.TEXT_PRIMARY
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone" style={{ color: COLORS.TEXT_PRIMARY }}>Телефон *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    style={{
                                        borderColor: COLORS.BORDER,
                                        backgroundColor: COLORS.BG_PRIMARY,
                                        color: COLORS.TEXT_PRIMARY
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" style={{ color: COLORS.TEXT_PRIMARY }}>Сообщение</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    style={{
                                        borderColor: COLORS.BORDER,
                                        backgroundColor: COLORS.BG_PRIMARY,
                                        color: COLORS.TEXT_PRIMARY
                                    }}
                                />
                            </div>

                            <Button type="submit" variant="primary" size="large">
                                Отправить
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="map-placeholder" style={{
                    backgroundColor: COLORS.BORDER,
                    color: COLORS.TEXT_SECONDARY
                }}>
                    <div className="map-content">
                        <span>Карта</span>
                        <p>Санкт-Петербург, ул. Тосина 6</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
