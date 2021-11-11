// libs
import React from 'react';
import PropTypes from 'prop-types';

// style
import './style.scss';

const Menu = ({ title, imageUrl }) => (
  <div className="menu-item">
    <div className="menu-item-title">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="menu-item-image" />
      ) : (
        <span>{title}</span>
      )}
    </div>
  </div>
);

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

Menu.defaultProps = {
  imageUrl: null,
};

export default Menu;
