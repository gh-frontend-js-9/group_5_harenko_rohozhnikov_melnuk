import React from 'react';
import { Container } from '@material-ui/core'
import { Box } from '@material-ui/core';
import '../bottomBlock.scss'

export class RightBlock extends React.Component {
  render() {
    return (
      <Container className="bottom-block" maxWidth="sm">
      <div className="display-block"></div>
        <div className="main-block">
          <Box className="main-block_subtitle" component="span">BY   TOMAS LAURINAVICIUS   IN   ANNOUNCEMENTS<br /></Box>
          <Box className="main-block_title" component="span">How to Fix Error 404 Not Found on Your<br />
           WordPress Site</Box>
          <Box className="main-block_txt" component="p">User research is the reality check every project needs. Here’s our<br />
                guide to why you should be doing it — and how to get started.</Box>
        </div>
        </Container>
    )
  }
}