// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import MenuItem from './mains/MenuItem';
// style
import './style.scss';

const Menu = ({ menuList }) => (
  <div className="menu-wrapper">
    <div className="menu-wrapper-inner">
      {menuList.map((menu) => (
        <MenuItem imageUrl={menu.imageUrl} title={menu.title} />
      ))}
    </div>
  </div>
);

Menu.propTypes = {
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Menu;
