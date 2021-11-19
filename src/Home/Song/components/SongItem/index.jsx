// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import CardAvatar from '../../../components/Card/mains/CardAvatar';
import CardContent from '../../../components/Card/mains/CardContent';
import CardDetail from '../../../components/Card/components/CardDetail';
// style
import './style.scss';

const SongItem = ({ song }) => (
  <div className="song-item-wrapper">
    <div className="song-item-wrapper-inner">
      <CardAvatar cardAvatar={song.avatar} cardType="song" />
      <CardContent cardContent={song.content} cardType="song" />
      <CardDetail cardDetail={song.detail} cardType="song" />
    </div>
  </div>
);

SongItem.propTypes = {
  song: PropTypes.arrayOf(
    PropTypes.shape({
      sId: PropTypes.string.isRequired,
      avatar: PropTypes.shape({}).isRequired,
      content: PropTypes.shape({}).isRequired,
      detail: PropTypes.shape({}).isRequired,
    }),
  ).isRequired,
};

export default SongItem;
