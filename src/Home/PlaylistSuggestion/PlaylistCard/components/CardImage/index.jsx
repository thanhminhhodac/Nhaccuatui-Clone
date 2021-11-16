// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

const CardImage = ({ imageUrl, altImage }) => (
  <div className="card-image">
    <img src={imageUrl} alt={altImage} />
  </div>
);

CardImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
};
export default CardImage;
