import React from 'react'
import './bredcrumb.scss'

export const Bredcrumb: React.FC = () => {
    return (
        <section className="bred-crumb">
			<div className="container">
				<a className="bred-crumb__link" href="">
                    Home  —  Tomas Laurinavicius
				</a>
			</div>
		</section>
    )
}

export default Bredcrumb;