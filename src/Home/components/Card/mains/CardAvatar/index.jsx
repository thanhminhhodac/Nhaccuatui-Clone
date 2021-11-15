// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import CardImage from '../../components/CardImage';

const CardAvatar = ({ cardImage, description }) => (
  <div className="card-avatar-wrapper">
    <CardImage cardImage={cardImage} description={description} />
  </div>
);
CardAvatar.propTypes = {
  cardImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default CardAvatar;
