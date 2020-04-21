import React from 'react'
import './leave.scss'
import Comments from './comment'

export const Leave: React.FC = () => {
    return (
		<section className="leave">
			<div className="leave__item flex-sb">
				<div className="leave__title title">Comments</div>
				<div className="leave__button">Leave a Comment</div>
			</div>
			<div className="leave__item">
				<span className="leave__item--bold">Comment policy:</span> 
                We love comments and appreciate the time that readers spend 
				to share ideas and give feedback. However, all comments are manually moderated 
				and those deemed to be spam or solely promotional will be deleted.
			</div>
			<Comments />
		</section>
    )
}

export default Leave;