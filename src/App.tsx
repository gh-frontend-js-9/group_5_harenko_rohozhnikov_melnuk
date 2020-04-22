import React from 'react'
import './App.scss'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Bredcrumb from './components/Bredcrumb/bredCrumb'
import User from './components/User/user'

function App() {
  return (
    <>
      <div className="container">
        <Header  style="display: block"/>
        <Bredcrumb />
      </div>
      <main className="main container">
        <section className="content">
          <User />
        </section>
        <section className="saidebar"></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
