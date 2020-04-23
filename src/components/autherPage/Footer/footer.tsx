import React from 'react'
import './footer.scss'
import Social from './social/social'
import Logo from '../../../assets/images/logo.png'

export const Footer: React.FC = () => {
    return (
        <footer className="footer container flex-sb">
            <div className="footer__item">
                <a href="/"><img src={Logo} alt="Logo" /></a>
            </div>
            <div className="footer__item">
                <Social />
            </div>
            <div className="footer__item">
                <div className="footer__copyright">All Rights Reserved 2018 BehindMars</div>
            </div>
        </footer>
    )
}

export default Footer;