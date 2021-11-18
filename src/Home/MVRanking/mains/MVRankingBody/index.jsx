// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import RankingPlace from '../../../components/Ranking/RankingPlace';
import RankingList from '../../../components/Ranking/RankingList';
// style
import './style.scss';

const MVRankingBody = ({ rankingPlaces, rankingList }) => (
  <div className="mv-ranking-body">
    <RankingPlace places={rankingPlaces} />
    <RankingList list={rankingList[0].topList} />
  </div>
);

MVRankingBody.propTypes = {
  rankingPlaces: PropTypes.arrayOf(PropTypes.object).isRequired,
  rankingList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MVRankingBody;
