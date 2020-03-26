import React from 'react';
import { PopularBlock } from './components/Blocks/PopularBlock'
import EssentialBlock from './components/Blocks/EssentialBlock'
import { FreelanceBlock } from './components/Blocks/FreelanceBlock'
import "./style/articlesBlock.scss"

function ArticlesArea() {
    return (
     <div className="articles-root">
      <PopularBlock/>
      <EssentialBlock/>
      <FreelanceBlock/>
     </div>
    );
  }

export default ArticlesArea