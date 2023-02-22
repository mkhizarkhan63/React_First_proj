import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1  from '../assets/images/gallery.jpg';
import img2  from '../assets/images/galler1.jpg';
const Services = () => {
    return (
        <div className='services'>
            <Carousel infiniteLoop interval={1000} autoPlay showThumbs={false} showStatus={false} showArrows={false}>
                <div>
                    <img src={img1} alt="Item1" />
                    <p className="legend">Fullstack</p>
                </div>
                <div>
                    <img src={img2} alt="Item2" />
                    <p className="legend">Gallery</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Services
