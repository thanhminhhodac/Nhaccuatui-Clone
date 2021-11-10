// libs
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './style.scss';

export const Icon = ({ image, size, ...props }) => (
  <div className="icon" {...props}>
    {image && (
      <img src={image.src} alt={image.alt} className={`icon-${size}`} />
    )}
  </div>
);

Icon.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'logo']),
  image: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }),
};

Icon.defaultProps = {
  onClick: null,
  size: 'medium',
  image: {
    src: null,
    alt: null,
  },
};
