import React from 'react'
import { COLORS } from '../constants/colors'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 style={{ color: COLORS.TEXT_PRIMARY }}>КРУТТ</h3>
                        <p style={{ color: COLORS.TEXT_SECONDARY }}>Мужская парикмахерская с оригинальной концепцией</p>
                        <div className="social-links">
                            <a href="#" aria-label="WhatsApp" style={{
                                borderColor: COLORS.BORDER,
                                color: COLORS.TEXT_SECONDARY
                            }}>WhatsApp</a>
                            <a href="#" aria-label="Telegram" style={{
                                borderColor: COLORS.BORDER,
                                color: COLORS.TEXT_SECONDARY
                            }}>Telegram</a>
                            <a href="#" aria-label="VK" style={{
                                borderColor: COLORS.BORDER,
                                color: COLORS.TEXT_SECONDARY
                            }}>VK</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 style={{ color: COLORS.TEXT_PRIMARY }}>Услуги</h4>
                        <ul>
                            <li><a href="#services" style={{ color: COLORS.TEXT_SECONDARY }}>Мужские стрижки</a></li>
                            <li><a href="#services" style={{ color: COLORS.TEXT_SECONDARY }}>Детские стрижки</a></li>
                            <li><a href="#services" style={{ color: COLORS.TEXT_SECONDARY }}>Бритьё</a></li>
                            <li><a href="#services" style={{ color: COLORS.TEXT_SECONDARY }}>Уход за бородой</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 style={{ color: COLORS.TEXT_PRIMARY }}>Контакты</h4>
                        <ul>
                            <li><a href="tel:+79936380008" style={{ color: COLORS.TEXT_SECONDARY }}>+7 (993) 638-00-08</a></li>
                            <li><a href="mailto:krutt.barbershop@yandex.ru" style={{ color: COLORS.TEXT_SECONDARY }}>krutt.barbershop@yandex.ru</a></li>
                            <li style={{ color: COLORS.TEXT_SECONDARY }}>СПб, ул. Тосина 6</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 style={{ color: COLORS.TEXT_PRIMARY }}>Акции</h4>
                        <div className="promo">
                            <p style={{ color: COLORS.TEXT_SECONDARY }}>Каждая 8-я стрижка бесплатно!</p>
                            <p style={{ color: COLORS.TEXT_SECONDARY }}>Скидка 30% новым клиентам</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p style={{ color: COLORS.TEXT_SECONDARY }}>&copy; 2024 КРУТТ. Все права защищены.</p>
                    <div className="footer-links">
                        <a href="#" style={{ color: COLORS.TEXT_SECONDARY }}>Политика конфиденциальности</a>
                        <a href="#" style={{ color: COLORS.TEXT_SECONDARY }}>Условия использования</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
