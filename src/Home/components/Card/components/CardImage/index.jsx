// lib
import React from 'react';
import PropTypes from 'prop-types';

const CardImage = ({ cardImage, description }) => (
  <div className="card-image-wrapper">
    <img className="card-image" src={cardImage} alt={description} />
  </div>
);

CardImage.propTypes = {
  cardImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardImage;
