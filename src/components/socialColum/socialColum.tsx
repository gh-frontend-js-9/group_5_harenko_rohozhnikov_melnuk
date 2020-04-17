import React from 'react'
import './socialColum.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

export const SocialColum: React.FC = () => {
    return (
		<ul className="post__menu social flex-sb">
			<li className="social__item social__item--column">
				<a className="social__link" href="">
                    <FontAwesomeIcon icon={faPinterestP} />
				</a>
			</li>
			<li className="social__item social__item--column">
				<a className="social__link" href="">
                    <FontAwesomeIcon icon={faInstagram} />
				</a>
			</li>
			<li className="social__item social__item--column">
				<a className="social__link" href="">
                    <FontAwesomeIcon icon={faTwitter} />
				</a>
			</li>
			<li className="social__item social__item--column">
				<a className="social__link" href="">
                    <FontAwesomeIcon icon={faFacebookF} />
				</a>
			</li>
		</ul>
    )
}

export default SocialColum;