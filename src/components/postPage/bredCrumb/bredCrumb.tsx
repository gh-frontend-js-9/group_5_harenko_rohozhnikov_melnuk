import React from 'react'
import './bredCrumb.scss'

export const BredCrumb: React.FC = () => {
    return (
        <section className="bred-crumb">
			<div className="container">
				<a className="bred-crumb__link" href="">
					Home  —  Reading lists  —  UX Design  —  
					<span className="bred-crumb__link--color">
                        10 Reasons to Build Your Website with WP Page Builder
                    </span>
				</a>
			</div>
		</section>
    )
}

export default BredCrumb;