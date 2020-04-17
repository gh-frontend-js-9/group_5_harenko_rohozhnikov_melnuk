import React from 'react'
import './post.scss'
import avatar from '../../assets/images/avatar.png'
import postImg from '../../assets/images/postImg.png'
import postImgSmoll from '../../assets/images/postImgSmoll.png'
import SocialColum from '../socialColum/socialColum'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { faEye} from '@fortawesome/free-solid-svg-icons'
import PostLIst from '../postList/postList'

export const Post: React.FC = () => {
    return (
        <section className="post container">
			<div className="post__item flex-sa">
				<div className="post__social">
					<SocialColum />
				</div>
				<div className="post__img">
					<img src={postImg} alt="postImg" />
				</div>
				<div className="post__action ">
					<ul className="social social--colum">
						<li className="social__item--column">
							<FontAwesomeIcon icon={faHeart} className="fa" />
							<div className="social__count">12 K</div>
						</li>
						<li className="social__item--column">
							<i className="far fa-eye fa"></i>
							<FontAwesomeIcon icon={faEye} className="fa" />
							<div className="social__count">25 K</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="post__item">
				<div className="post__text">
					People’s quest for creating websites has easily taken us to a new era of site development. 
					Where, with the availability of robust page building tools, creating websites has become a 
					lot more fun (especially for non-developers). The multitude of tools and plugins available 
					to you is vast when you try building websites on WordPress. Today we’ll explore a new one, 
					<span className="post__text--color">WP Page Builder</span>. If you’re tired of the same old 
					page builder plugins, this is one you should try out.
				</div>
			</div>
			<div className="post__item">
				<div className="post__title title">
					What’s Special About WP Page Builder?
				</div>
				<div className="post__text">
					Wondering what makes WP Page Builder so special? I would say, what doesn’t? It’s developed 
					by the team over at Themeum, who has been creating 
					<span className="post__text--color">WordPress themes</span> 
					since 2013. As mentioned above, the plugin is a full pack of essential site building 
					elements with all modern the modern functionality you’ve come to expect from a page 
					builder plugin. Let’s have a look below at all of the juicy features WP Page Builder includes.
				</div>
			</div>
			<div className="post__item flex-c">
				<div className="post__img">
					<img src={postImg} alt="postImg" />
				</div>
			</div>
			<div className="post__item">
				<div className="post__text">Here are some of the amazing add-ons included:</div>
				<PostLIst />
			</div>
			<div className="post__item flex-sa">
				<div className="post__img post__img--smoll">
					<img src={postImgSmoll} alt="postImgSmoll" />
				</div>
				<div className="post__img post__img--smoll">
					<img src={postImgSmoll} alt="postImgSmoll" />
				</div>
			</div>
			<div className="post__item">
				<div className="post__text post__text--style">
					“ WP Page Builder offers a lot of ready-to-use design blocks to 
					make your site development process a lot faster and easier “
				</div>
			</div>
			<div className="post__item">
				<div className="post__avatar avatar">
					<img src={avatar} alt="avatar" />
				</div>
				<div className="post__user">TOMAS LAURINAVICIUS</div>
				<div className="post__address">Follow me 
					<a className="post__address--color" href="">@JohnAMWill.</a>
				</div>
			</div>
		</section>
    )
}

export default Post;