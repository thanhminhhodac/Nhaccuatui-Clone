// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';
// components
import { RightOutlined } from '@ant-design/icons';

const Heading = ({ title, icon }) => (
  <div className="heading">
    <span className="heading-title">{title}</span>
    {icon && <RightOutlined className="right-outlined" />}
  </div>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.bool,
};

Heading.defaultProps = {
  icon: false,
};

export default Heading;
