// libs
import React from 'react';
import PropTypes from 'prop-types';
// styles
import './style.scss';

const CardContent = ({ content }) => (
  <div className="card-content">
    <span>{content}</span>
  </div>
);

CardContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default CardContent;
