import React from 'react'
import Header from './Header/Header'
// import SliderCarousel from '../SliderCarousel'
import ArticlesArea from './ArticlesBlocks/ArticlesArea'
import BottomBlocksArea from './BottomBlocks/BottomBlocksArea'
import Footer from './Footer/Footer'

function blogPage() {
  return (
    <>
      <Header />
      {/* <SliderCarousel /> */}
      <ArticlesArea />
      <BottomBlocksArea />
      <Footer />
    </>
  );
}

export default blogPage