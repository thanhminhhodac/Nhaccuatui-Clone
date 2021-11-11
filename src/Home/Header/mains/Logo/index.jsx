// libs
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './style.scss';

// components
import { Icon } from '../../components/Icon';

// others
import MainLogo from '../../../../assets/logo.png';

const Logo = ({ url, ...props }) => {
  const image = {
    alt: 'NCT logo',
    src: MainLogo,
  };
  return (
    <div className="logo" {...props}>
      <a className="logo-link" href={url}>
        <Icon image={image} size="logo" />
      </a>
    </div>
  );
};

Logo.propTypes = {
  url: PropTypes.string,
};

Logo.defaultProps = {
  url: '#',
};

export default Logo;
