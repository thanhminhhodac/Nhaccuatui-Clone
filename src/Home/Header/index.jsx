// libs
import React from 'react';

// components
import Logo from './Logo';
import NewVersion from './NewVersion';

// styles
import './style.scss';

const Header = () => (
  <div className="header-wrapper">
    <div className="header-inner">
      <Logo url="https://www.nhaccuatui.com/" />
      <NewVersion url="https://beta.nhaccuatui.com/" />
    </div>
  </div>
);

export default Header;
