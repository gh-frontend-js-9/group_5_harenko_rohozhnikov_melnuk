import React from 'react'
import './saidebar.scss'
import '../Subscribe/subscribe.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export const Saidebar: React.FC = () => {
    return (
        <section className="saidebar">
			<div className="search">
                <div className="search__text">Type something…</div>
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="form subscribe">
                <div className="title title--bottom">
                    SUBSCRIBE
                </div>
                <input className="form__input" type="text" placeholder="Email" />
                <input className="form__submit" type="submit" value="Subscribe"></input>
            </div>
            
		</section>
    )
}

export default Saidebar;