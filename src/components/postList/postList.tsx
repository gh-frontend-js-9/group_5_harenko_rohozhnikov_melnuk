import React from 'react'

export const PostLIst: React.FC = () => {
    return (
		<ul className="post__list">
			<li className="post__text">
				<span className="post__text--bold">Form: </span> 
				Create web forms effortlessly. It gives you a convenient way to style 
				your forms as you desire. The Form add-on itself is capable of setting 
				up any kind of form without needing to install any plugin. Moreover, you 
				can manage form plugins and enable reCAPTCHA with just a simple click. 
				There is also an add-on for Contact Form 7 if you prefer.
			</li>
			<li className="post__text">
			    <span className="post__text--bold">Carousel: </span> 
			    It’s hard to find an advanced add-on like a carousel in a free page 
		        builder plugin, but WP Page Builder lets you create stunning hero 
			    sliders without having to pay for it.
			</li>
			<li className="post__text">
				<span className="post__text--bold">Post Grid: </span> 
				Display blog posts in grids defining the number of posts and styling the look.
			</li>
			<li className="post__text">
				<span className="post__text--bold">Feature Box: </span> 
				Use the Feature Box add-on to display the features of products on your website.
			</li>
			<li className="post__text">
				<span className="post__text--bold">Accordion: </span> 
				Need any collapse text content on your site? Use WP Page Builder’s 
				Accordion add-on and modify the style the way you want.
			</li>
		</ul>
    )
}

export default PostLIst;