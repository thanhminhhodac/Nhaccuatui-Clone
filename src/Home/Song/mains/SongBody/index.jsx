// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import SongItem from '../../components/SongItem';
// styles
import './style.scss';

const SongBody = ({ songList }) => (
  <div className="song-body-wrapper">
    <div className="song-body-wrapper-inner">
      {songList.map((songItem) => (
        <SongItem song={songItem} key={songItem.sId} />
      ))}
    </div>
  </div>
);

SongBody.propTypes = {
  songList: PropTypes.arrayOf(
    PropTypes.shape({
      sId: PropTypes.string.isRequired,
      avatar: PropTypes.shape({}).isRequired,
      content: PropTypes.shape({}).isRequired,
      detail: PropTypes.shape({}).isRequired,
    }),
  ).isRequired,
};

export default SongBody;
