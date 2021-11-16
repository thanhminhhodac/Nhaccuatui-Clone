// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';
// components
import PlaylistCard from '../PlaylistCard';

const PlaylistSuggestionBody = ({ suggestList }) => (
  <div className="playlist-suggestion-body">
    {
      // eslint-disable-next-line arrow-parens
      suggestList.map((suggest) => (
        <PlaylistCard
          imageUrl={suggest.imageUrl}
          suggestion={suggest.suggestion}
        />
      ))
    }
  </div>
);

PlaylistSuggestionBody.propTypes = {
  suggestList: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      suggestion: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PlaylistSuggestionBody;
