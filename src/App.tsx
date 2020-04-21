import React from 'react'
import './App.scss';
import Header from './components/Header/header'
// import About from './components/about/about'
import BredCrumb from './components/BredCrumb/bredCrumb'
import Post from './components/Post/post'
// import Related from './components/related/related'
// import Comments from './components/comments/comments'
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
      <div className="container">
        <Header/>
        {/* <About /> */}
      </div>
      <main className="main">
        <BredCrumb />
        <Post />
        {/*<Related />
        <Comments /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
