import React from 'react';
import './App.scss';
import Header from './components/Header/header'
import ArticlesArea from './components/ArticlesBlocks/ArticlesArea'
import BottomBlocksArea from './components/BottomBlocks/BottomBlocksArea'

function App() {
  return (
    <>
      <Header />
      <ArticlesArea />
      <BottomBlocksArea />
    </>
  );
}

export default App