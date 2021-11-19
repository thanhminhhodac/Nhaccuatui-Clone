// libs
import React from 'react';
import PropTypes from 'prop-types';

const SectionHeading = ({ label }) => (
  <div className="section-heading-wrapper">
    <span className="section-heading-label">{label}</span>
  </div>
);

SectionHeading.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SectionHeading;
