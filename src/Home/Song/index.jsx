// libs
import React from 'react';
// components
import Heading from '../components/Heading';
import SongBody from './mains/SongBody';
// styles
import './style.scss';
// other
import { songList } from '../../dataSources/Home/Song';

const Song = () => (
  <div className="song-wrapper">
    <div className="song-wrapper-inner">
      <Heading title="Bài hát" icon />
      <SongBody songList={songList} />
    </div>
  </div>
);

export default Song;
