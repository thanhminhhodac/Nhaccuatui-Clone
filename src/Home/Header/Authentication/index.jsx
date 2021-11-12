// libs
import React from 'react';
// components
import AuthenticationItem from './mains/AuthenticationItem';
// style
import './style.scss';
// other
import { AuthenticationItemList } from '../../../Datasource/Home/Header/Authentication';

const Authentication = () => (
  <div className="authentication-wrapper">
    <div className="authentication-wrapper-inner">
      {AuthenticationItemList.map((authentication) => (
        <AuthenticationItem
          className={authentication.className}
          label={authentication.label}
        />
      ))}
    </div>
  </div>
);

export default Authentication;
