// lib
import React from 'react';
import PropTypes from 'prop-types';
// components
import { PlayCircleFilled } from '@ant-design/icons';
// style
import './style.scss';

const CardImage = ({ cardImage, cardDescription, cardPlay }) => (
  <div className="card-image-wrapper">
    <img className="card-image" src={cardImage} alt={cardDescription} />
    {cardPlay && <PlayCircleFilled className="card-icon-play" />}
  </div>
);

CardImage.propTypes = {
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardPlay: PropTypes.bool.isRequired,
};

export default CardImage;
