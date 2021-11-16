// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import AuthenticationItem from './mains/AuthenticationItem';
// style
import './style.scss';
// other

const Authentication = ({ authenticationList }) => (
  <div className="authentication-wrapper">
    <div className="authentication-wrapper-inner">
      {authenticationList.map((authentication) => (
        <AuthenticationItem
          className={authentication.className}
          label={authentication.label}
        />
      ))}
    </div>
  </div>
);

Authentication.propTypes = {
  authenticationList: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
};

export default Authentication;
