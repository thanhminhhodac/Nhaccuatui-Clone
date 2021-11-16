// libs
import React from 'react';
import PropTypes from 'prop-types';
// styles
import './style.scss';

const AuthenticationItem = ({ label, className }) => (
  <div className={['authentication-item', className].join(' ')}>{label}</div>
);

AuthenticationItem.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
};

AuthenticationItem.defaultProps = {
  label: 'button',
  className: 'btn btn-default',
};

export default AuthenticationItem;
