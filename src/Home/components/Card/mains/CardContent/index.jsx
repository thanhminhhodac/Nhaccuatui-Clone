// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

const CardContent = ({ cardContent, cardType }) => (
  <div className={['card-content-wrapper', `card-${cardType}`].join(' ')}>
    <span className="card-content-title">{cardContent.title}</span>
  </div>
);

CardContent.propTypes = {
  cardContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  cardType: PropTypes.string.isRequired,
};

export default CardContent;
