// lib
import React from 'react';

// components
import Heading from './Heading';
import PlaylistCard from './PlaylistCard';

// style
import './style.scss';

// other
import imageUrl from '../assets/playlistsuggestion_1.jpg';

const PlaylistSuggestion = () => (
  <div className="playlist-suggestion-wrapper">
    <Heading title="NẾU BẠN ĐỘC THÂN" />
    <div className="playlist-suggestion-body">
      <PlaylistCard imageUrl={imageUrl} suggestion="Album 1111111111111111" />
      <PlaylistCard imageUrl={imageUrl} suggestion="Album 1111111111111111" />
      <PlaylistCard imageUrl={imageUrl} suggestion="Album 1111111111111111" />
      <PlaylistCard imageUrl={imageUrl} suggestion="Album 1111111111111111" />
      <PlaylistCard imageUrl={imageUrl} suggestion="Album 1111111111111111" />
    </div>
  </div>
);

export default PlaylistSuggestion;
