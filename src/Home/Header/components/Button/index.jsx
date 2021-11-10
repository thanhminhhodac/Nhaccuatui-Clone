// libs
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './style.scss';

export const Button = ({
  primary, backgroundColor, label, size, ...props
}) => {
  const mode = primary ? 'button-primary' : 'button-secondary';
  return (
    <button
      type="button"
      className={[mode, `button-${size}`, 'button'].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
