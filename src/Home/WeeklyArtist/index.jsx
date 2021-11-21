// libs
import React from 'react';
// components
import Heading from '../components/Heading';
import WeeklyArtistBody from './mains/WeeklyArtistBody';
// styles
import './style.scss';
// other
import { weeklyArtistList } from '../../dataSources/Home/WeeklyArtist';

const WeeklyArtist = () => (
  <div className="weekly-artist-wrapper">
    <div className="weekly-artist-inner">
      <Heading title="Weekly Artist Chart" icon />
      <WeeklyArtistBody artistList={weeklyArtistList} />
    </div>
  </div>
);

export default WeeklyArtist;
