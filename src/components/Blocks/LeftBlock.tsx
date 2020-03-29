import React from 'react';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/core';
import '../bottomBlock.scss'

export class LeftBlock extends React.Component<any, any> {
  render() {
    return (
      <Container className="bottom-block" maxWidth="sm">
      <div className="display-block"/>
        <div className="main-block">
          <Box className="main-block_subtitle" component="span">BY   TOMAS LAURINAVICIUS   IN   RESOURCE<br /></Box>
          <Box className="main-block_title" component="span">Website Downtime: Applicable Tips on<br />
                   How to Prevent It</Box>
          <Box className="main-block_txt" component="p">User research is the reality check every project needs. Here’s our<br />
                  guide to why you should be doing it — and how to get started.</Box>
        </div>
        </Container>
    );
  }
}

