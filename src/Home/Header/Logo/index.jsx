// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

const Logo = ({ logoItem }) => (
  <div className="logo">
    <a className="logo-inner" href={logoItem.logoUrl}>
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
