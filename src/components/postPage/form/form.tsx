import React from 'react'
import './form.scss'

export const Form: React.FC = () => {
    return (
        <form id="reply" className="form__box">
			<div className="form__title title">Leave a Reply</div>
			<div className="form__item">
				<input className="form__input form__input--size" type="text" placeholder="Comment" />
			</div>
			<div className="form__item">
				<input className="form__input" type="text" placeholder="Name" />
			</div>
			<div className="form__item">
				<input className="form__input" type="text" placeholder="Email" />
			</div>
			<div className="form__item">
				<label className="form__label">
				    <input className="form__checkbox" type="checkbox" /> I agree to the 
					<a className="form__link" href=""> Terms and Conditions</a> and 
					<a className="form__link" href=""> Privacy Policy</a>
				</label>
			</div>
			<div className="form__item">
				<input className="form__submit" type="submit" value="Post Comment" />
			</div>
		</form>
    )
}

export default Form;