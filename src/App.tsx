import React from 'react'
import './App.scss'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Bredcrumb from './components/Bredcrumb/bredCrumb'

function App() {
  return (
    <>
      <div className="container">
        <Header  style="display: block"/>
        <Bredcrumb />
      </div>
      <Footer />
    </>
  );
}

export default App;
