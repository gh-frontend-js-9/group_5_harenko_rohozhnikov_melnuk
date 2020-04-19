import React, { useState } from 'react'
import './header.scss'
import '../Header/burgerMenu/burgerMenu.scss'
import Logo from '../../assets/images/logo.png'
import Navigation from './navigation/navigation'
// import 'https://code.jquery.com/jquery-3.1.1.min.js'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import BurgerMenu from './burgerMenu/burgerMenu';

let showMenu  = false;
let search: any = document.getElementsByClassName('header__search');
function switchMenu (event: any) {
    showMenu = !showMenu
    // search = !search
    let menu : any = document.getElementsByClassName('header__menu')
    console.log(search);
    console.log(menu);
    
    // search.target.classList.toggle('block')
    event.target.classList.toggle('burger-menu__lines--active')
    return showMenu
    // let search = event.find('header__search')
    // let menu = event.find('menu')
    // event.classList.toggle("burger-menu__lines--active");
}

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
                <FontAwesomeIcon icon={faSearch} className="header__search" />
                <div className="burger-menu" onClick={switchMenu}>
                    <a href="#" className="burger-menu__button" >
                        <span className={`burger-menu__lines${showMenu ? ' burger-menu__lines--active' : ''}`}></span> 
                    </a>
                </div>
            </div> 
	    </header>
    )
}

export default Header;