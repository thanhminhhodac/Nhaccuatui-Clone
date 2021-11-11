// libs
import React from 'react';

// components
import Logo from './Logo';

// styles
import './style.scss';

const Header = () => (
  <div className="header-wrapper">
    <div className="header-inner">
      <Logo url="https://www.nhaccuatui.com/" />
    </div>
  </div>
);

export default Header;
