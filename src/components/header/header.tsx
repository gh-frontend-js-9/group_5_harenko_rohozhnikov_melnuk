import React from 'react'
import Logo from '../../assets/images/logo.png'
import './header.scss'

export const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__items">
                    <a href="/"><img src={Logo} alt="Logo" /></a>
                </div>
                <nav className="header__items">
                    <ul className="header__menu menu">
                        <li className="menu__item"><a className="menu__link" href="#">Popular</a></li>
                        <li className="menu__item"><a className="menu__link" href="#">New</a></li>
                        <li className="menu__item"><a className="menu__link" href="#">Reading list</a></li>
                        <li className="menu__item"><a className="menu__link" href="#">Topics</a></li>
                        <li className="menu__item"><a className="menu__link" href="#">Subscribe</a></li>
                    </ul>
                </nav>
                <div className="header__items">
                    <form className="header__form"> 
                        <input className="header__search" type="text" name="search" />
                    </form>
                </div>
            </div>
	    </header>
    )
}

export default Header;