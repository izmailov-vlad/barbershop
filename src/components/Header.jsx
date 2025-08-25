import React, { useState } from 'react'
import { COLORS } from '../constants/colors'
import { Button } from './ui/Button'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <h1 style={{ color: COLORS.ACCENT }}>КРУТТ</h1>
                        <span style={{ color: COLORS.TEXT_SECONDARY }}>Мужская парикмахерская</span>
                    </div>

                    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                        <ul className="nav-list">
                            <li><a href="#masters">Мастера</a></li>
                            <li><a href="#services">Услуги и цены</a></li>
                            <li><a href="#gallery">Работы мастеров</a></li>
                            <li><a href="#contact">Контакты</a></li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <a href="tel:+79936380008" className="phone" style={{ color: COLORS.TEXT_PRIMARY }}>+7 (993) 638-00-08</a>
                        <Button variant="primary">Записаться</Button>
                        <button
                            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                            style={{ backgroundColor: 'transparent' }}
                        >
                            <span style={{ backgroundColor: COLORS.TEXT_PRIMARY }}></span>
                            <span style={{ backgroundColor: COLORS.TEXT_PRIMARY }}></span>
                            <span style={{ backgroundColor: COLORS.TEXT_PRIMARY }}></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
