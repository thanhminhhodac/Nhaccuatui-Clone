// libs
import React from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types';
// styles
import './style.scss';
// other
import sliderList from '../../dataSources/Home/Slider';

const SliderImage = ({ avatar }) => (
  <div className="slider-image-wrapper">
    <img
      className="slider-image-wrapper-inner"
      src={avatar.avatarImage}
      alt={avatar.avatarDescription}
    />
  </div>
);

SliderImage.propTypes = {
  avatar: PropTypes.shape({
    avatarImage: PropTypes.string.isRequired,
    avatarDescription: PropTypes.string.isRequired,
  }).isRequired,
};

const Slider = () => (
  <div className="slider-wrapper">
    <Carousel autoplay className="slider-carousel-wrapper">
      {sliderList.map((slider) => (
        <SliderImage avatar={slider.avatar} key={slider.id} />
      ))}
    </Carousel>
  </div>
);

export default Slider;
