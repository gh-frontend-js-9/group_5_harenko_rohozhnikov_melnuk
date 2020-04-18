import React from 'react';
import './header.scss'
import '../Header/burgerMenu/burgerMenu.scss'
import Logo from '../../assets/images/logo.png'
import Navigation from './navigation/navigation'
// import 'https://code.jquery.com/jquery-3.1.1.min.js'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import BurgerMenu from './burgerMenu/burgerMenu';

export const Header: React.FC = () => {
    return (
        <header className="header flex-sb">
            <div className="header__item flex-sb">
                <a className="header__link" href="/">
                    <img className="header__logo logo" src={Logo} alt="Logo" />
                </a>
                <nav className="header__nav nav burger-menu">
                    <Navigation />
                    {/* <BurgerMenu/> */}
                </nav>
            </div>
            <div className="header__item">
                <FontAwesomeIcon icon={faSearch} className="header__search"/>
                <div className="burger-menu" onClick={($event: any) => $event.target.classList.add('burger-menu__lines--active')}>
                    <a href="#" className="burger-menu__button" >
                        <span className="burger-menu__lines"></span>
                    </a>
                </div>
            </div>
	    </header>
    )
}

export default Header;