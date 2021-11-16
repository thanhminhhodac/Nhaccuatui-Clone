// lib
import React from 'react';
import PropTypes from 'prop-types';

// components
import Heading from '../components/Heading';

// style
import './style.scss';
import PlaylistSuggestionBody from './PlaylistSuggestionBody';

const PlaylistSuggestion = ({ title, suggestList }) => (
  <div className="playlist-suggestion-wrapper">
    <div className="playlist-suggestion-wrapper-inner">
      <Heading title={title} />
      <PlaylistSuggestionBody suggestList={suggestList} />
    </div>
  </div>
);

PlaylistSuggestion.propTypes = {
  title: PropTypes.string.isRequired,
  suggestList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlaylistSuggestion;
