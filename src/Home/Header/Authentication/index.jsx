// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import AuthenticationItem from './mains/AuthenticationItem';
// style
import './style.scss';
// context

const Authentication = ({ authenticationList }) => (
  <div className="authentication-wrapper">
    <div className="authentication-wrapper-inner">
      {authenticationList.map((authentication) => (
        <AuthenticationItem
          className={authentication.className}
          name={authentication.name}
          key={authentication.id}
        />
      ))}
    </div>
  </div>
);

Authentication.propTypes = {
  authenticationList: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default Authentication;
