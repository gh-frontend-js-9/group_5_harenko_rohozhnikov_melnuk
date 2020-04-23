import React, { useState } from 'react'
import { Box } from '@material-ui/core';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './sliderCarousel.scss'

export default function SliderCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
            <Carousel.Item>
                <div className="d-block w-100%">
                    <div className="slider-main-block">
                        <Box className="slider-main-block_subtitle" component="span">BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS<br /></Box>
                        <Box className="slider-main-block_title" component="span">How to Create a PayPal Donate Button for<br />
                 Your WordPress Site</Box>
                        <Box className="slider-main-block_txt" component="p">User research is the reality check every project needs. Here’s our<br />
    guide to why you should be doing it — and how to get started.</Box>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-block w-100%">
                    <div className="slider-main-block">
                        <Box className="slider-main-block_subtitle" component="span">BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS<br /></Box>
                        <Box className="slider-main-block_title" component="span">How to Boost Conversions on Your<br />
           WooCommerce Product Pages</Box>
                        <Box className="slider-main-block_txt" component="p">User research is the reality check every project needs. Here’s our<br />
    guide to why you should be doing it — and how to get started.</Box>
                    </div>
                </div>
            </Carousel.Item><Carousel.Item>
                <div className="d-block w-100%">
                    <div className="slider-main-block">
                        <Box className="slider-main-block_subtitle" component="span">BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS<br /></Box>
                        <Box className="slider-main-block_title" component="span">How to Quickly Fix WordPress<br />
             Mixed Content Warnings (HTTPS/SSL)</Box>
                        <Box className="slider-main-block_txt" component="p">User research is the reality check every project needs. Here’s our<br />
    guide to why you should be doing it — and how to get started.</Box>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}