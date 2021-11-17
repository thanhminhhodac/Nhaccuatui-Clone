// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';
// components
import Card from '../../components/Card';

const PlaylistSuggestionBody = ({ suggestList }) => (
  <div className="playlist-suggestion-body">
    {suggestList.map((suggest) => (
      <Card cardItem={suggest} cardType="suggestion" />
    ))}
  </div>
);

PlaylistSuggestionBody.propTypes = {
  suggestList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PlaylistSuggestionBody;
