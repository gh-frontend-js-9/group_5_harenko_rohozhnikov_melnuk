import React from 'react'
import './App.scss'
<<<<<<< HEAD
import Header from './components/header/header'
import About from './components/about/about'
import BredCrumb from './components/bredCrumb/bredCrumb'
import Post from './components/post/post'
import Related from './components/related/related'
=======
import Comments from './components/comments/comments'
>>>>>>> post/comments

function App() {
  return (
    <>
<<<<<<< HEAD
      <div className="container">
        <Header />
        <About />
      </div>
      <main className="main">
        <BredCrumb />
        <Post />
        <Related />
=======
      <main className="main">
        <Comments />
>>>>>>> post/comments
      </main>
    </>
  );
}

export default App;
