// libs
import React from 'react';
import PropTypes from 'prop-types';

// components
import { PlayCircleFilled } from '@ant-design/icons';

// style
import './style.scss';

const PlaylistCard = ({ imageUrl, suggestion }) => (
  <div className="playlist-suggestion-card">
    <div className="card-body">
      <div className="card-body-image">
        <img src={imageUrl} alt="suggest playlist img" />
      </div>
      <div className="card-body-icon">
        <PlayCircleFilled className="card-body-icon-play" />
      </div>
    </div>
    <div className="card-content">
      <span>{suggestion}</span>
    </div>
  </div>
);

PlaylistCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  suggestion: PropTypes.string.isRequired,
};

export default PlaylistCard;
