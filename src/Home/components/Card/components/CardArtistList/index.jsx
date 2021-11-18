// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

const CardArtistList = ({ artistList }) => (
  <div className="card-content-artist-wrapper">
    {artistList.map((artist, index) => (
      <div className="card-content-artist" key={artist.aPId}>
        {artist.artistName}
        {index < artistList.length - 1 ? ',' : ''}
      </div>
    ))}
  </div>
);

CardArtistList.propTypes = {
  artistList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CardArtistList;
