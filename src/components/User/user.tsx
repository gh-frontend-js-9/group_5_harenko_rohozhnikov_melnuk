import React from 'react'
import './user.scss'
import avatar from '../../assets/images/avatar.png'
import Social from '../Footer/social/social'

export const User: React.FC = () => {
    return (
		<section className="user">
			<div className="user__avatar avatar">
				<img src={avatar} alt="avatar" />
			</div>
			<div className="user__name">TOMAS LAURINAVICIUS</div>
			<div className="user__text">
				Hi, my name is Daniel, I'm the CTO <br />here at Kinsta.
			</div>
			<Social />
		</section>
    )
}

export default User;