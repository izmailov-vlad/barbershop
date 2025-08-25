import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>КРУТТ</h3>
                        <p>Мужская парикмахерская с оригинальной концепцией</p>
                        <div className="social-links">
                            <a href="#" aria-label="WhatsApp">WhatsApp</a>
                            <a href="#" aria-label="Telegram">Telegram</a>
                            <a href="#" aria-label="VK">VK</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Услуги</h4>
                        <ul>
                            <li><a href="#services">Мужские стрижки</a></li>
                            <li><a href="#services">Детские стрижки</a></li>
                            <li><a href="#services">Бритьё</a></li>
                            <li><a href="#services">Уход за бородой</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Контакты</h4>
                        <ul>
                            <li><a href="tel:+79936380008">+7 (993) 638-00-08</a></li>
                            <li><a href="mailto:krutt.barbershop@yandex.ru">krutt.barbershop@yandex.ru</a></li>
                            <li>СПб, ул. Тосина 6</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Акции</h4>
                        <div className="promo">
                            <p>Каждая 8-я стрижка бесплатно!</p>
                            <p>Скидка 30% новым клиентам</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 КРУТТ. Все права защищены.</p>
                    <div className="footer-links">
                        <a href="#">Политика конфиденциальности</a>
                        <a href="#">Условия использования</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
