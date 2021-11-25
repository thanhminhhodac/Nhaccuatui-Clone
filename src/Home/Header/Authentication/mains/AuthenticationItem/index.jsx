// libs
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// context
import { useLocale } from '../../../../../contexts/LocaleContext';
// styles
import './style.scss';

const AuthenticationItem = ({ className, name }) => {
  const { localeDataSource } = useLocale();
  const { authenticationName } = localeDataSource;

  return (
    <div
      className={classNames('authentication-item', className)}
      title={authenticationName[name]}
    >
      {authenticationName[name]}
    </div>
  );
};

AuthenticationItem.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

AuthenticationItem.defaultProps = {
  name: 'button',
  className: 'btn btn-default',
};

export default AuthenticationItem;
