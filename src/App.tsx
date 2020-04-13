import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import ArticlesArea from './components/ArticlesBlocks/ArticlesArea'
import BottomBlocksArea from './components/BottomBlocks/BottomBlocksArea'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <ArticlesArea />
      <BottomBlocksArea />
      <Footer />
    </>
  );
}

export default App