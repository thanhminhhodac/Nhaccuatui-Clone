// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import { CaretRightFilled } from '@ant-design/icons';
// style
import './style.scss';

/**
 * @module ButtonIcon
 * @param {Object} props - properties
 * @param {string} props.type - Icon type of button
 * @returns { React.ReactElement}
 */

const ButtonIcon = ({ type }) => (
  <div className="btn-icon">
    {type === 'arrow-right' && <CaretRightFilled className="arrow-right" />}
  </div>
);

ButtonIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ButtonIcon;
