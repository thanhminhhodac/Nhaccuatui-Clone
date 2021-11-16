// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import ButtonLabel from './mains/ButtonLabel';
import ButtonIcon from './mains/ButtonIcon';
// style
import './style.scss';

const Button = ({ bannerButton }) => (
  <div className="banner-button-wrapper btn-banner">
    <ButtonIcon type="arrow-right" />
    <ButtonLabel label={bannerButton.label} />
  </div>
);

Button.propTypes = {
  bannerButton: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }).isRequired,
};
export default Button;
