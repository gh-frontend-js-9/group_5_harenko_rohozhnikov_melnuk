import React from 'react';
import { Container } from '@material-ui/core'
import LeftBlock from './Blocks/LeftBlock'
import RightBlock from './Blocks/RightBlock'
import "./bottomBlock.scss"

function BottomBlocksArea() {
  return (
    <div className="bottom-blocks-root">
      <Container className="bottom-block-area" maxWidth="lg">
        <LeftBlock />
        <RightBlock />
      </Container>
    </div>
  );
}

export default BottomBlocksArea