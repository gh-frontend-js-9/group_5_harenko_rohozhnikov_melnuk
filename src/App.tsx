import React from 'react'
import './App.scss';
import Header from './components/blogPage/Header/Header'
import ArticlesArea from './components/blogPage/ArticlesBlocks/ArticlesArea'
import BottomBlocksArea from './components/blogPage/BottomBlocks/BottomBlocksArea'
import Footer from './components/blogPage/Footer/Footer'

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