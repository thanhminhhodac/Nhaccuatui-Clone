// lib
import React from 'react';
// style
import './style.scss';
// components
import SongRankingBody from './mains/SongRankingBody';
import Heading from '../components/Heading';
// other
import {
  songRankingList,
  songRankingPlaces,
} from '../../dataSources/Home/SongRanking';

const SongRanking = () => (
  <div className="song-ranking-wrapper">
    <Heading title="BXH bài hát" play />
    <SongRankingBody
      rankingList={songRankingList}
      rankingPlaces={songRankingPlaces}
    />
  </div>
);

export default SongRanking;
