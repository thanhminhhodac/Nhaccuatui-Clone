// libs
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './style.scss';

export const Icon = ({ image, ...props }) => (
  <div className="icon" {...props}>
    <img src={image.src} alt={image.alt} />
  </div>
);

Icon.propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.objectOf(PropTypes.object()),
};

Icon.defaultProps = {
  onClick: null,
  image: {},
};
