import React, { Component } from 'react';
import Slider from 'react-slick'

class HomepageSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Fade</h2>
        <Slider {...settings}>
          <div><img src='https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/06/why-are-dogs-scared-of-firework-header.jpg' /></div>
          <div><img src={'https://images-na.ssl-images-amazon.com/images/G/01/img17/pet-products/vertical-store/1025139_us_pets_sns_upd_vd-hero_1920x693._CB521773290_.jpg'} /></div>
       
        </Slider>
      </div>
    );
  }
}

export default HomepageSlider;