import React from 'react'
import Header from './header/header'
import About from './about/about'
import BredCrumb from './bredCrumb/bredCrumb'
import Post from './post/post'
import Related from './related/related'
import Comments from './comments/comments'
import Footer from './Footer/Footer';


function postPage() {
    return (
        <>
            <div className="container">
                <Header />
                <About />
            </div>
            <main className="main">
                <BredCrumb />
                <Post />
                <Related />
                <Comments />
            </main>
            <div className="container">
                <Footer />
            </div>
        </>
    );
}

export default postPage