// libs
import React from 'react';
import PropTypes from 'prop-types';

// style
import './style.scss';

// other
import LogoImage from '../../../assets/logo.png';

const Logo = ({ url }) => (
  <div className="logo">
    <a className="logo-inner" href={url}>
      <img src={LogoImage} className="logo-image" alt="Logo NCT" />
    </a>
  </div>
);

Logo.propTypes = {
  url: PropTypes.string,
};

Logo.defaultProps = {
  url: 'https://storybook.js.org/docs',
};

export default Logo;
