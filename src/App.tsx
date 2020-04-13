import React from 'react'
import './App.scss'
import Header from './components/header/header'
import About from './components/about/about'
import BredCrumb from './components/bredCrumb/bredCrumb'
import Post from './components/post/post'
import Related from './components/related/related'

function App() {
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
      </main>
    </>
  );
}

export default App;
