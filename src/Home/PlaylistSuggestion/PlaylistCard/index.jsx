// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import CardBody from './mains/CardBody';
import CardContent from './mains/CardContent';

// style
import './style.scss';

const PlaylistCard = ({ imageUrl, suggestion }) => (
  <div className="playlist-suggestion-card">
    <CardBody imageUrl={imageUrl} suggestion={suggestion} />
    <CardContent content={suggestion} />
  </div>
);

PlaylistCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  suggestion: PropTypes.string.isRequired,
};

export default PlaylistCard;
