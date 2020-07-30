import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import sliderFirstImage from '../../assets/slider1.png';
import sliderSecondImage from '../../assets/merchanEntrega.png';
import sliderThirdImage from '../../assets/royalImg.png';


export default function Carrossel() {
    return (
        <div>
            <Carousel id="carouselExampleControls">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderFirstImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderSecondImage}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderThirdImage}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}