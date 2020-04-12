import React from 'react';
import PopularBlock from './Blocks/PopularBlock'
import EssentialBlock from './Blocks/EssentialBlock'
import FreelanceBlock from './Blocks/FreelanceBlock'
import "./articlesBlock.scss"

function ArticlesArea() {
  return (
    <div className="articles-root">
      <PopularBlock />
      <EssentialBlock />
      <FreelanceBlock />
    </div>
  );
}

export default ArticlesArea