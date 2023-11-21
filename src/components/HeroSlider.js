import React from 'react'
import {Carousel} from 'react-bootstrap'
import './CarousalPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSlider = () => {
    return (
        <div id='home'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images4.alphacoders.com/909/909185.jpg"
                        alt="First slide"
                        
                    />
                    <Carousel.Caption>
                        <h3>This is the first slide!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src=" https://images4.alphacoders.com/133/1336451.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images3.alphacoders.com/133/1334627.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images8.alphacoders.com/133/1335152.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeroSlider