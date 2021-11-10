// libs
import React from 'react';
import PropTypes from 'prop-types';

// component
import { Button } from '../../components/Button';

// style
import './style.scss';

export const Authentication = ({ loggedIn, register, login, logout }) => (
  <div className="Authentication">
    {loggedIn ? (
      <Button size="medium" onClick={logout} label="Đăng xuất" />
    ) : (
      <>
        <Button size="medium" onClick={login} label="Đăng nhập" />
        <Button size="medium" onClick={register} label="Đăng ký" primary />
      </>
    )}
  </div>
);

Authentication.propTypes = {
  loggedIn: PropTypes.bool,
  register: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

Authentication.defaultProps = {
  loggedIn: false,
};
