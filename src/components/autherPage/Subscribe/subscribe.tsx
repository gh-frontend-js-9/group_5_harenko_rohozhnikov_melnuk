import React from 'react'
import './subscribe.scss'

export const Subscribe: React.FC = () => {
    return (
        <>
            <div className="title title--bottom">
                Get free web design insights...
			</div>
            <div className="subscribe__title title">In your inbox, every other week. And unsubscribe in a click, if you want.</div>
            <div className="form subscribe">
                <input className="form__input" type="text" placeholder="Email" />
                <input className="form__submit" type="submit" value="Subscribe"></input>
            </div>
        </>
    )
}

export default Subscribe;