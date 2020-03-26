import React from 'react';
import { Container } from '@material-ui/core'
import { Box } from '@material-ui/core';
import '../articlesBlock.scss'

export class PopularBlock extends React.Component {
  render() {
      return (
        <div className="articles-area">
            <Container className="title-block" maxWidth="lg">
      <Box className="title-block_title" component="h2">Popular</Box>
              <Box className="title-block_txt" component="a">View all</Box>
            </Container>
            <Container className="articles-block" maxWidth="lg">
              <div className="main-block">
                <Box className="main-block_subtitle" component="span">BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS<br /></Box>
                <Box className="main-block_title" component="span">How to Boost Conversions on Your<br />
               WooCommerce Product Pages</Box>
                <Box className="main-block_txt" component="p">User research is the reality check every project needs. Here’s our<br />
                guide to why you should be doing it — and how to get started.</Box>
              </div>
              <div>
                <div className="small-blocks-area">
                  <div className="small-articles-block">
                    <Box className="small-articles-block_category" component="span">FREELANCING</Box>
                    <Box className="small-articles-block_title" component="p">7 Best WordPress Caching<br />
                   Plugins for 2018</Box>
                  </div>
                  <div className="small-articles-block">
                    <Box className="small-articles-block_category" component="span">RESOURCE</Box>
                    <Box className="small-articles-block_title" component="p">Kinsta Kingpin: Interview<br />
                   with Kevin Muldoon</Box>
                  </div>
                </div>
                <div className="small-blocks-area">
                  <div className="small-articles-block">
                    <Box className="small-articles-block_category" component="span">DESIGN PROCESS</Box>
                    <Box className="small-articles-block_title" component="p">8 Ways To Leverage<br />
                   LinkedIn for Marketing</Box>
                  </div>
                  <div className="small-articles-block">
                    <Box className="small-articles-block_category" component="span">INSPIRATION</Box>
                    <Box className="small-articles-block_title" component="p">Working Remotely –<br />
                   Everything You Need</Box>
                  </div>
                </div>
              </div>
            </Container>
        </div>
      )
  }
}