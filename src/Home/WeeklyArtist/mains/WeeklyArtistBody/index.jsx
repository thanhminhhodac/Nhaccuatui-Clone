// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import Card from '../../../components/Card';
// style
import './style.scss';

const WeeklyArtistBody = ({ artistList }) => (
  <div className="weekly-artis-body">
    {artistList.map((artistItem) => (
      <Card cardItem={artistItem} cardType="artist" key={artistItem.id} />
    ))}
  </div>
);

WeeklyArtistBody.propTypes = {
  artistList: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default WeeklyArtistBody;
