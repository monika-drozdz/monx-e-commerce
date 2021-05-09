import React, { Component } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import {Link} from 'react-router-dom';
import CustomButton from '../../components/CustomButton/custom-button.component';

class SimpleSlider extends Component {
    
    render() {
        const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        }; 
        return ( 
          <Slider {...settings}>
          <div className="main-banner first">
            <div className="title">
              <p className="text">
              musujące kule do kąpieli
              </p>
              <Link to='/shop/bathbombs'>
                <CustomButton>Zobacz</CustomButton>
              </Link>
                
            </div></div>
          

          <div className="main-banner second">
            <div className="title">
              <p className="text">
              Nawilżająca sól do kąpieli
              </p>
              <Link to='/shop/salts'>
              <CustomButton>Zobacz</CustomButton>
              </Link>
            </div>
          </div>

          <div className="main-banner third">
            <div className="title">
              <p className="text">
              naturalne świece sojowe
              </p>
              <Link to='/shop/candles'>
              <CustomButton>Zobacz</CustomButton>
              </Link>
            </div>
          </div>
          </Slider>
        );
    };
};
 
export default SimpleSlider;
