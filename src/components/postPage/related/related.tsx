import React from 'react'
import './related.scss'
import imgRelatedContent from '../../../assets/images/imgRelatedContent.png'

export const Related: React.FC = () => {
    return (
        <section className="related container">
			<div className="related__item flex-sb">
				<div className="related__title title">You might also like...</div>
				<div className="related__more">
					<a className="related__more--color" href="">More</a>
				</div>
			</div>
			<div className="related__item flex-sb">
				<div className="related__box">
					<div className="related__img">
                        <img src={imgRelatedContent} alt="imgRelatedContent" /> 
					</div>
					<div className="related__author author">BY
						<span className="author--color"> TOMAS LAURINAVICIUS</span>
						IN
						<span className="author--color"> DESIGN PROCESS </span>
					</div>
					<div className="title">Web page layout 101: website anatomy every designer needs to learn</div>
					<div className="related__text">User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</div>
				</div>
				<div className="related__box">
					<div className="related__img">
                        <img src={imgRelatedContent} alt="imgRelatedContent" />
					</div>
					<div className="related__author author">BY
						<span className="author--color"> TOMAS LAURINAVICIUS </span>
						IN
						<span className="author--color"> DESIGN PROCESS </span>
					</div>
					<div className="title">Web page layout 101: website anatomy every designer needs to learn</div>
					<div className="related__text">User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</div>
				</div>
			</div>
		</section>
    )
}

export default Related;