import React from 'react'
import './App.scss'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Bredcrumb from './components/Bredcrumb/bredCrumb'
import Posts from './components/Posts/post'
import Saidebar from './components/Saidebar/saidebar'

function App() {
  return (
    <>
      <div className="container">
        <Header  style="display: block"/>
        <Bredcrumb />
      </div>
      <main className="main container flex-sa">
          <Posts />
          <Saidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
