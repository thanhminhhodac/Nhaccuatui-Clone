// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import MenuItem from './mains/MenuItem';
// hooks
import { useLocale } from '../../../contexts/LocaleContext';
// style
import './style.scss';

const Menu = ({ menuList }) => {
  const { localeDataSource } = useLocale();
  const { menuName } = localeDataSource;
  return (
    <div className="menu-wrapper">
      <div className="menu-wrapper-inner">
        {menuList.map((menu) => (
          <MenuItem
            imageUrl={menu.imageUrl}
            title={menu.title}
            key={menu.id}
            textDisplay={menuName[menu.name]}
          />
        ))}
      </div>
    </div>
  );
};

Menu.propTypes = {
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      imageUrl: PropTypes.string,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Menu;
