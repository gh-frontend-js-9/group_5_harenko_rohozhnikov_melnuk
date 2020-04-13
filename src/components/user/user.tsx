import React from 'react'
import avatar from '../../assets/images/avatar.png'

export const User: React.FC = () => {
    return (
		<>
			<div className="post__avatar avatar">
				<img src={avatar} alt="avatar" />
			</div>
			<div className="post__user">TOMAS LAURINAVICIUS</div>
			<div className="post__address">Follow me 
				<a className="post__address--color" href="">@JohnAMWill.</a>
			</div>
		</>
    )
}

export default User;