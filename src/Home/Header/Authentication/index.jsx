// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import AuthenticationItem from './mains/AuthenticationItem';
// style
import './style.scss';
// context
import { useLocale } from '../../../contexts/LocaleContext';
// other

const Authentication = ({ authenticationList }) => {
  const { localeDataSource } = useLocale();
  const { authenticationName } = localeDataSource;
  console.log(authenticationName);
  return (
    <div className="authentication-wrapper">
      <div className="authentication-wrapper-inner">
        {authenticationList.map((authentication) => (
          <AuthenticationItem
            className={authentication.className}
            label={authenticationName[authentication.name]}
            key={authentication.id}
          />
        ))}
      </div>
    </div>
  );
};

Authentication.propTypes = {
  authenticationList: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      label: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default Authentication;
