// lib
import React from 'react';
import PropTypes from 'prop-types';
// components
import CardAvatar from './mains/CardAvatar';
// style
import './style.scss';

const Card = ({ cardImage, description }) => (
  <div className="card-wrapper">
    <div className="card-wrapper-inner">
      <CardAvatar cardImage={cardImage} description={description} />
    </div>
  </div>
);

Card.propTypes = {
  cardImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
