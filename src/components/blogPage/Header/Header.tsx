import React from 'react';
import './header.scss'
import './burgerMenu.scss'
import Logo from  '../../../assets/images/logo.png'
import { Navigation } from './navigation/navigation'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            isDisplay: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e: any) {
        e.target.classList.toggle('burger-menu__lines--active')
        this.setState((state: any) => ({
            isDisplay: !state.isDisplay
        }));
    }

    render() {
        const style = this.state.isDisplay ? { display: 'none' } : { display: 'block' };
        return (
            <div className="container">
            <header className="header flex-sb">
                <div className="header__item flex-sb">
                    <a className="header__link" href="/">
                        <img className="header__logo logo" src={Logo} alt="Logo" />
                    </a>
                    <nav className="header__nav nav">
                        <Navigation display={style} /> 
                    </nav>
                </div>
                <div className="header__item">
                    <FontAwesomeIcon style={style} icon={faSearch} className="header__search" />
                    <div className="burger-menu" onClick={e => this.handleClick(e)}>
                        <a href="#" className="burger-menu__button" >
                            <span className="burger-menu__lines"></span>
                        </a>
                    </div>
                </div>
            </header>
            </div>
        )
    }
}

export default Header;