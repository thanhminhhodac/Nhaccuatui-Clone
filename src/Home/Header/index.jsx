// libs
import React from 'react';

// components
import Logo from './Logo';
import NewVersion from './NewVersion';
import Menu from './Menu';
import Authentication from './Authentication';
import Functional from './Functional';
import Search from './Search';

// styles
import './style.scss';

// other
import {
  menuList,
  authenticationList,
  logoItem,
  newVersionItem,
  functionalList,
} from '../../Datasource/Home/Header';

const Header = () => (
  <div className="header-wrapper">
    <div className="header-inner">
      <div className="header-left">
        <Logo logoItem={logoItem} />
        <NewVersion newVersionItem={newVersionItem} />
        <Menu menuList={menuList} />
      </div>
      <div className="header-right">
        <Search />
        <Functional functionalList={functionalList} />
        <div className="header-divider" />
        <Authentication authenticationList={authenticationList} />
      </div>
    </div>
  </div>
);

export default Header;
