// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

const ButtonLabel = ({ label }) => (
  <div className="button-label">
    <span>{label}</span>
  </div>
);

ButtonLabel.propTypes = {
  label: PropTypes.string.isRequired,
};
export default ButtonLabel;
