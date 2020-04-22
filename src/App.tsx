import React from 'react'
import './App.scss'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Bredcrumb from './components/Bredcrumb/bredCrumb'
import Post from './components/Posts/post'

function App() {
  return (
    <>
      <div className="container">
        <Header  style="display: block"/>
        <Bredcrumb />
      </div>
      <main className="main container">
          <Post />
        <section className="saidebar"></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
