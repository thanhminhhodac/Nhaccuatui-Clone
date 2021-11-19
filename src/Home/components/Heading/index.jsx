// libs
import React from 'react';
import PropTypes from 'prop-types';
import { RightOutlined, PlayCircleFilled } from '@ant-design/icons';
// style
import './style.scss';

const Heading = ({ title, icon, play }) => (
  <div className="heading">
    <span className="heading-title">{title}</span>
    {icon && <RightOutlined className="right-outlined" />}
    {play && <PlayCircleFilled className="play-circle" />}
  </div>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  play: PropTypes.bool,
};

Heading.defaultProps = {
  icon: false,
  play: false,
};

export default Heading;
