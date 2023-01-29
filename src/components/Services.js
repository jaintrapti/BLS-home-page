import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/schl.jpg";
import img2 from "../assets/edu.jpg";
import img3 from "../assets/library.jpg";
import img4 from "../assets/sports.jpg";

const Services = () => {
  return (
    <div className='services'>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false} showIndicators={false}>
        <div>
            <img src={img1} alt="Item1" />
            <p className='legend'>Front Image of BLS World School</p>
        </div>
        <div>
            <img src={img2} alt="Item3" />
            <p className='legend'>Students studying in Educomb</p>
        </div>
        <div>
            <img src={img3} alt="Item3" />
            <p className='legend'>Library of school</p>
        </div>
        <div>
            <img src={img4} alt="Item3" />
            <p className='legend'>Sports Activities</p>
        </div>
      </Carousel> 
    </div>
  )
}

export default Services;
