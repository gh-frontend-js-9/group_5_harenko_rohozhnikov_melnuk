import React from 'react'
import './App.scss'
import Header from './components/header/header'
import About from './components/about/about'

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <About />
      </div>
    </>
  );
}

export default App;
