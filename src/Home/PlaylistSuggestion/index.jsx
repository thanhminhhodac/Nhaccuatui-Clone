// lib
import React from 'react';

// components
import Heading from './Heading';
import PlaylistCard from './PlaylistCard';

// style
import './style.scss';

const PlaylistSuggestion = () => (
  <div className="playlist-suggestion-wrapper">
    <Heading />
    <PlaylistCard />
  </div>
);

export default PlaylistSuggestion;
