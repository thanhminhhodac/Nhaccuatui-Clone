// libs
import React from 'react';
import PropTypes from 'prop-types';

// components
import { PlayCircleFilled } from '@ant-design/icons';

// style

const PlaylistCard = ({ imageUrl, suggestion }) => (
  <div className="playlist-suggestion-card">
    <div className="card-body">
      <div className="card-image">
        <img src={imageUrl} alt="suggest playlist img" />
      </div>
      <div className="card-icon">
        <PlayCircleFilled className="card-icon-play" />
      </div>
    </div>
    <div className="card-content">
      <p>{suggestion}</p>
    </div>
  </div>
);

PlaylistCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  suggestion: PropTypes.string.isRequired,
};

export default PlaylistCard;
