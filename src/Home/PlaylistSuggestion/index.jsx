// lib
import React from 'react';
import PropTypes from 'prop-types';

// components
import Heading from './Heading';
import PlaylistCard from './PlaylistCard';

// style
import './style.scss';

const PlaylistSuggestion = ({ title, suggestList }) => (
  <div className="playlist-suggestion-wrapper">
    <Heading title={title} />
    <div className="playlist-suggestion-body">
      {
        // eslint-disable-next-line arrow-parens
        suggestList.map(suggest => (
          <PlaylistCard
            imageUrl={suggest.imageUrl}
            suggestion={suggest.suggestion}
          />
        ))
      }
    </div>
  </div>
);

PlaylistSuggestion.propTypes = {
  title: PropTypes.string.isRequired,
  suggestList: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      suggestion: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PlaylistSuggestion;
