import React from 'react'
import './App.scss'
import Header from './components/header/header'
import About from './components/about/about'
import BredCrumb from './components/bredCrumb/bredCrumb'

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <About />
      </div>
      <main className="main">
        <BredCrumb />
      </main>
    </>
  );
}

export default App;
