import React from 'react'
import './App.scss'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

function App() {
  return (
    <>
      <div className="container">
        <Header  style="display: block"/>
      </div>
      <Footer />
    </>
  );
}

export default App;
