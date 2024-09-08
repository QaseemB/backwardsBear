import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  return (
    <Slider {...settings}>
        <div className="slide-1"><h3 className='text-black'>Dana:</h3> Great Book! </div>
        <div className="slide-2"><h3 className='text-black'>Hubert</h3>Love this Book!!! Highly recommended</div>
        <div className="slide-3"><h3 className='text-black'>Sarah:</h3>This is a great book! My son loves it! He wants me to read it to him every night. </div>
    </Slider>
  )
};

export default Carousel