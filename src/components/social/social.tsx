import React from 'react'
import './social.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

export const Social: React.FC = () => {
    return (
        <ul className="social">
			<li className="social__item">
				<a className="social__link" href="">
                    <FontAwesomeIcon icon={faVk} />
				</a>
			</li>
			<li className="social__item">
				<a className="social__link" href="">
                    <FontAwesomeIcon icon={faPinterestP} />
				</a>
			</li>
			<li className="social__item">
				<a className="social__link" href="">
                    <FontAwesomeIcon icon={faInstagram} />
				</a>
			</li>
			<li className="social__item">
				<a className="social__link" href="">
                    <FontAwesomeIcon icon={faTwitter} />
				</a>
			</li>
			<li className="social__item">
				<a className="social__link" href="">
                    <FontAwesomeIcon icon={faFacebook} />
				</a>
			</li>
		</ul>
    )
}

export default Social;
