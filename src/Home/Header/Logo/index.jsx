// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

/**
 * Defined a Logo Object that represents
 *
 * @typedef {Object} Logo
 * @property {string} logoImage - The src of Logo Image
 * @property {string} logoUrl - The URL of redirect page after click
 */

/**
 * Component for showing Logo of website
 * @module
 * @param {Logo} logoItem - The logo Item of website
 * @returns <Logo logoItem={logoItem} />
 */

const Logo = ({ logoItem }) => (
  <div className="logo-wrapper">
    <a className="logo-wrapper-inner" href={logoItem.logoUrl}>
      <img src={logoItem.logoImage} className="logo-image" alt="Logo NCT" />
    </a>
  </div>
);

Logo.propTypes = {
  logoItem: PropTypes.shape({
    logoImage: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Logo;
