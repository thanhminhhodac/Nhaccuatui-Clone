// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import { PlayCircleFilled } from '@ant-design/icons';
// style
import './style.scss';

const CardIcon = ({ type }) => (
  <div className="card-icon">
    {type === 'play' && <PlayCircleFilled className="card-icon-play" />}
  </div>
);

CardIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default CardIcon;
