// lib
import React from 'react';
// style
import './style.scss';
// component
import Heading from '../components/Heading';
import MVRankingBody from './mains/MVRankingBody';
// other
import {
  mvRankingPlaces,
  mvRankingList,
} from '../../dataSources/Home/MVRanking';

const MVRanking = () => (
  <div className="mv-ranking-wrapper">
    <div className="mv-ranking-wrapper-inner">
      <Heading title="bxh mv" play />
      <MVRankingBody
        rankingList={mvRankingList}
        rankingPlaces={mvRankingPlaces}
      />
    </div>
  </div>
);

export default MVRanking;
