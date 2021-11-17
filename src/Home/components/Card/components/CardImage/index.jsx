// lib
import React from 'react';
import PropTypes from 'prop-types';
// components
// style
import './style.scss';

const CardImage = ({ cardImage, cardDescription }) => (
  <>
    <div className="card-image-wrapper">
      <img className="card-image" src={cardImage} alt={cardDescription} />
    </div>
  </>
);

CardImage.propTypes = {
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
};

export default CardImage;
