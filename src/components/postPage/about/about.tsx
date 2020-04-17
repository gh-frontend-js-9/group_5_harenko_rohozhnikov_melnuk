import React from 'react'
import './about.scss'

export const About: React.FC = () => {
    return (
        <div className="about">
			<h2 className="about__title">
                10 Reasons to Build Your Website with WP Page Builder
            </h2>
			<p className="about__text">
                People’s quest for creating websites has easily taken 
                us to a new era of site development. Where, with the 
                availability of robust page building tools, creating 
                websites has become a lot more fun (especially for 
                non-developers).
            </p>
			<div className="about__author author">
                BY <span className="author--color">TOMAS LAURINAVICIUS </span>
				IN <span className="author--color">DESIGN PROCESS</span>
			</div>
		</div>
    )
}

export default About;