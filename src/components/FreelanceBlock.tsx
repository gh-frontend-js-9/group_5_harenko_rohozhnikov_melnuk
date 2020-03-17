import React from 'react';
import { Container } from '@material-ui/core'
import { Box } from '@material-ui/core';
import '../style/articlesBlock.scss'

export function FreelanceBlock() {
  return (
    <div className="articles-area">
        <Container className="title-block" maxWidth="lg">
          <Box className="title-block_title" component="h2">Freelance</Box>
          <Box className="title-block_txt" component="a">View all</Box>
        </Container>
        <Container className="articles-block" maxWidth="lg">
          <div className="main-block">
            <Box className="main-block_subtitle" component="span">BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS<br /></Box>
            <Box className="main-block_title" component="span">10 Best WordPress Event<br />
             Management Plugins (Calendars,<br />
              Ticketing, RSVPs)</Box>
            <Box className="main-block_txt" component="p">User research is the reality check every project needs. Here’s our<br />
            guide to why you should be doing it — and how to get started.</Box>
          </div>
          <div>
            <div className="small-blocks-area">
              <div className="small-articles-block">
                <Box className="small-articles-block_category" component="span">FREELANCING</Box>
                <Box className="small-articles-block_title" component="p">The 53 Best Tools for<br />
                 Freelancers</Box>
              </div>
              <div className="small-articles-block">
                <Box className="small-articles-block_category" component="span">FREELANCING</Box>
                <Box className="small-articles-block_title" component="p">Why and How to Use Lossy<br />
                 Compression</Box>
              </div>
            </div>
            <div className="small-blocks-area">
              <div className="small-articles-block">
                <Box className="small-articles-block_category" component="span">DESIGN PROCESS</Box>
                <Box className="small-articles-block_title" component="p">11 WordPress Instagram<br />
                 Plugins for Displaying</Box>
              </div>
              <div className="small-articles-block">
                <Box className="small-articles-block_category" component="span">INSPIRATION</Box>
                <Box className="small-articles-block_title" component="p">Kinsta Kingpin: Interview<br />
               with Kevin Muldoon</Box>
              </div>
            </div>
          </div>
        </Container>
    </div>
  );
}