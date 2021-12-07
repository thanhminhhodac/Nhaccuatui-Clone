// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

/**
 * @module SectionHeading
 * @param {Object} props - Properties
 * @param {string} props.label - Label
 * @return {React.ReactElement}
 */

const SectionHeading = ({ label }) => (
  <div className="section-heading-wrapper">
    <span className="section-heading-label">{label}</span>
  </div>
);

SectionHeading.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SectionHeading;
