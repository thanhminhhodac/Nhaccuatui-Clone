// lib
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

const FunctionalItem = ({ image }) => (
  <div className="functional-item">
    <img src={image} alt="icon" className="functional-item-image" />
  </div>
);

FunctionalItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default FunctionalItem;
