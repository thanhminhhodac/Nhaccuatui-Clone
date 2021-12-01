// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

/**
 * @module ButtonLabel
 * @param {Object} props - properties
 * @param {string} props.label - Label of button
 * @returns { React.ReactElement}
 */

const ButtonLabel = ({ label }) => (
  <div className="button-label">
    <span>{label}</span>
  </div>
);

ButtonLabel.propTypes = {
  label: PropTypes.string.isRequired,
};
export default ButtonLabel;
