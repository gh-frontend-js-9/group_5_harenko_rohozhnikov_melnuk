import React from 'react'
import './comments.scss'
import Leave from '../leave/leave'
import Form from '../form/form'

export const Comments: React.FC = () => {
    return (
        <section className="comments container">
			<Leave />
			<section className="form">
				<div className="form__container">
					<Form />
				</div>
			</section>
		</section>
    )
}

export default Comments;