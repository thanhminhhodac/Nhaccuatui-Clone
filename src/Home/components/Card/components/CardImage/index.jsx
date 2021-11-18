// lib
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

const CardImage = ({ cardImage, cardDescription }) => (
  <div className="card-image-wrapper">
    <img
      className="card-image-wrapper-inner"
      src={cardImage}
      alt={cardDescription}
    />
  </div>
);

CardImage.propTypes = {
  cardImage: PropTypes.string,
  cardDescription: PropTypes.string,
};

CardImage.defaultProps = {
  cardImage: null,
  cardDescription: null,
};

export default CardImage;
