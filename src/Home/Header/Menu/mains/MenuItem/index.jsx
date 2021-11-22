// libs
import React from 'react';
import PropTypes from 'prop-types';
// context
import { useLocale } from '../../../../../contexts/LocaleContext';
// style
import './style.scss';

const MenuItem = ({ imageUrl, name }) => {
  const { localeDataSource } = useLocale();
  const { menuName } = localeDataSource;

  return (
    <div className="menu-item-wrapper">
      <div className="menu-item-title">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={menuName[name]}
            className="menu-item-image"
          />
        ) : (
          <span>{menuName[name]}</span>
        )}
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

MenuItem.defaultProps = {
  imageUrl: null,
};

export default MenuItem;
