import React from 'react'
import Header from './Header/Header'
import ArticlesArea from './ArticlesBlocks/ArticlesArea'
import BottomBlocksArea from './BottomBlocks/BottomBlocksArea'
import Footer from './Footer/Footer'

function blogPage() {
  return (
    <>
      <Header />
      <ArticlesArea />
      <BottomBlocksArea />
      <Footer />
    </>
  );
}

export default blogPage