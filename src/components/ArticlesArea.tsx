import React from 'react';
import { LeftBlock } from './Blocks/LeftBlock'
import { RightBlock } from './Blocks/RightBlock'
import "./bottomBlock.scss"

function ArticlesArea() {
  return (
    <div className="bottom-blocks-root">
      <LeftBlock />
      <RightBlock />
    </div>
  );
}

export default ArticlesArea