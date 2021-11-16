// libs
import React from 'react';
import PropTypes from 'prop-types';

// style
import './style.scss';

const MenuItem = ({ title, imageUrl }) => (
  <div className="menu-item-wrapper">
    <div className="menu-item-title">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="menu-item-image" />
      ) : (
        <span>{title}</span>
      )}
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

MenuItem.defaultProps = {
  imageUrl: null,
};

export default MenuItem;
