// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import RankingItem from './mains/RankingItem';
// style
import './style.scss';

const RankingList = ({ list }) => (
  <div className="ranking-list-wrapper">
    <div className="ranking-list-wrapper-inner">
      {list.map((item, index) => (
        <RankingItem rankingItem={item} ordering={index + 1} />
      ))}
    </div>
  </div>
);

RankingList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default RankingList;
