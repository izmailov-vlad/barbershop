import React, { useState } from 'react'

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
                    <h2>Контакты и карта</h2>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <h3>Адрес</h3>
                            <p>г. Санкт-Петербург, Тосина 6<br />(около 8 парадной)</p>
                        </div>

                        <div className="contact-item">
                            <h3>Телефон</h3>
                            <p><a href="tel:+79936380008">+7 (993) 638-00-08</a></p>
                        </div>

                        <div className="contact-item">
                            <h3>Email</h3>
                            <p><a href="mailto:krutt.barbershop@yandex.ru">krutt.barbershop@yandex.ru</a></p>
                        </div>

                        <div className="contact-item">
                            <h3>Режим работы</h3>
                            <p>Пн-Вс: 10:00 - 22:00</p>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h3>Записаться на стрижку</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Имя</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Телефон *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Сообщение</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary btn-large">
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>

                <div className="map-placeholder">
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
