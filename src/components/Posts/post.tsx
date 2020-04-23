import React from 'react'
import './post.scss'
import User from '../User/user'
import Subscribe from '../Subscribe/subscribe'
import postImg from '../../assets/images/postImg.png'


export const Posts: React.FC = () => {
    return (
        <section className="post container posts">
			<User />
			<div className="post__item">
				<div className="post__img">
					<img  src={postImg} alt="postImg" width="100%" />
				</div>
				<div className="related__author author">
					<span className="author--color">BY </span>
					TOMAS LAURINAVICIUS
					<span className="author--color"> IN </span>
					DESIGN PROCESS
				</div>
				<div className="title">
					How to Migrate from Wix to WordPress (Complete Guide)
				</div>
			</div>
			<div className="post__item">
				<div className="post__img">
					<img  src={postImg} alt="postImg" width="100%" />
				</div>
				<div className="related__author author">
					<span className="author--color">BY </span>
					TOMAS LAURINAVICIUS
					<span className="author--color"> IN </span>
					DESIGN PROCESS
				</div>
				<div className="title">
					Preparing Your WordPress Site for the Google Mobile-First Index
				</div>
			</div>
			<div className="post__item">
				<div className="post__img">
					<img  src={postImg} alt="postImg" width="100%" />
				</div>
				<div className="related__author author">
					<span className="author--color">BY </span>
					TOMAS LAURINAVICIUS
					<span className="author--color"> IN </span>
					DESIGN PROCESS
				</div>
				<div className="title">
					How To Use Yoast SEO On WordPress: Complete Tutorial
				</div>
			</div>
			<Subscribe />
		</section>
    )
}

export default Posts;