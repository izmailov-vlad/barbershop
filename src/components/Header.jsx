import React, { useState } from 'react'

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
                        <h1>КРУТТ</h1>
                        <span>Мужская парикмахерская</span>
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
                        <a href="tel:+79936380008" className="phone">+7 (993) 638-00-08</a>
                        <button className="btn btn-primary">Записаться</button>
                        <button
                            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
