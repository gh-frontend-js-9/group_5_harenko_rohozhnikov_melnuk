import React from 'react';
import { PopularBlock } from './components/PopularBlock'
import { EssentialBlock } from './components/EssentialBlock'
import { FreelanceBlock } from './components/FreelanceBlock'
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