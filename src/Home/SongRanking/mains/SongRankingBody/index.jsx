// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import RankingPlace from '../../../components/Ranking/RankingPlace';
import RankingList from '../../../components/Ranking/RankingList';
// style
import './style.scss';

const SongRankingBody = ({ rankingPlaces, rankingList }) => (
  <div className="song-ranking-body">
    <RankingPlace places={rankingPlaces} />
    <RankingList list={rankingList[0].topList} rankingType="song-ranking" />
  </div>
);

SongRankingBody.propTypes = {
  rankingPlaces: PropTypes.arrayOf(PropTypes.object).isRequired,
  rankingList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SongRankingBody;
