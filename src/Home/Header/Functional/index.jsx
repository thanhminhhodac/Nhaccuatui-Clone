// libs
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './style.scss';

const Functional = ({ url }) => (
  <div className="functional-item">
    <img src={url} alt="icon" className="functional-item-image" />
  </div>
);

Functional.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Functional;
