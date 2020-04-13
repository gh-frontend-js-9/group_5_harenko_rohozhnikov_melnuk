import React from 'react'
import './header.scss'
// import Logo from '../../assets/images/logo.png';
import Navigation from '../navigation/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Header: React.FC = () => {
    return (
        <header className="header flex-sb">
            <div className="header__item">
                {/* <a href="/"><img src={Logo} alt="Logo" /></a> */}
            </div>
            <div className="header__item">
                <Navigation />
            </div>
            <div className="header__item">
                <FontAwesomeIcon icon={faSearch} />
            </div>
	    </header>
    )
}

export default Header;