import React from 'react'
import './leave.scss'
import Avatar from '../../assets/images/avatar.png'

export const Comments: React.FC = () => {
    return (
		<>
			<div className="leave__item leave__item--bottom">
				<div className="comments__inner">
					<div className="comments__user">
						<div className="comments__items">
							<div className="avatar">
								<img className="avatar__img" src={Avatar} alt="avatar" />
							</div>
						</div>
						<div className="comments__items flex-sb">
							<div className="comments__title title">Brian Jackson</div>
							<div className="comments__data">December 14, 2017 at 5:13 pm</div>
							<div className="comments__button">Reply</div>
						</div>
					</div>
					<div className="comments__message">
						I think, you forgot to mention a very good one:
						Thrive architect from thrivethemes. That thing is pretty powerful.
					</div>
				</div>
				<div className="comments__inner comments__inner--shift">
					<div className="comments__user">
						<div className="comments__items">
							<div className="avatar">
								<img className="avatar__img" src={Avatar} alt="avatar" />
							</div>
						</div>
						<div className="comments__items flex-sb">
							<div className="comments__title title">Sean Scott</div>
							<div className="comments__data">December 14, 2017 at 5:13 pm</div>
						</div>
					</div>
					<div className="comments__message">
						Thanks Brian! We have updated the above post. You are correct, their 
						page builder has both a free and a premium version.
					</div>
				</div>
			</div>
			<div className="leave__item leave__item--bottom">
				<div className="comments__inner">
					<div className="comments__user">
						<div className="comments__items">
							<div className="avatar">
								<img className="avatar__img" src={Avatar} alt="avatar" />
							</div>
						</div>
						<div className="comments__items flex-sb">
							<div className="comments__title title">Wiliam Hilton</div>
							<div className="comments__data">December 14, 2017 at 5:13 pm</div>
							<div className="comments__button">Reply</div>
						</div>
					</div>
					<div className="comments__message">
						I think, you forgot to mention a very good one:
					    Thrive architect from thrivethemes. That thing is pretty powerful.
					</div>
				</div>
			</div>
		</>
    )
}

export default Comments;