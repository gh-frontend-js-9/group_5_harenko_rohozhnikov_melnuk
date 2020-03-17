import React from 'react';
import { Container } from '@material-ui/core'
import { Box } from '@material-ui/core';
import '../style/articlesBlock.scss'

export function EssentialBlock() {
    return (
        <div className="articles-area">
            <Container className="title-block" maxWidth="lg">
                <Box className="title-block_title" component="h2">Essentials</Box>
                <Box className="title-block_txt" component="a">View all</Box>
            </Container>
            <Container className="articles-block" maxWidth="lg">
                <div className="main-block">
                    <Box className="main-block_subtitle" component="span">BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS<br /></Box>
                    <Box className="main-block_title" component="span">How to Quickly Fix WordPress<br />
             Mixed Content Warnings (HTTPS/<br />
             SSL)</Box>
                    <Box className="main-block_txt" component="p">User research is the reality check every project needs. Here’s our<br />
            guide to why you should be doing it — and how to get started.</Box>
                </div>
                <div>
                    <div className="small-blocks-area">
                        <div className="small-articles-block">
                            <Box className="small-articles-block_category" component="span">FREELANCING</Box>
                            <Box className="small-articles-block_title" component="p">10 WordPress Lead<br />
                 Generation Plugins</Box>
                        </div>
                        <div className="small-articles-block">
                            <Box className="small-articles-block_category" component="span">FREELANCING</Box>
                            <Box className="small-articles-block_title" component="p">RIP HHVM – We’ve Had a<br />
                 Good Run</Box>
                        </div>
                    </div>
                    <div className="small-blocks-area">
                        <div className="small-articles-block">
                            <Box className="small-articles-block_category" component="span">DESIGN PROCESS</Box>
                            <Box className="small-articles-block_title" component="p">How to Add a Stripe<br />
                 Donate Button</Box>
                        </div>
                        <div className="small-articles-block">
                            <Box className="small-articles-block_category" component="span">INSPIRATION</Box>
                            <Box className="small-articles-block_title" component="p">How to Set up Sucuri<br />
                 Firewall (WAF)</Box>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}