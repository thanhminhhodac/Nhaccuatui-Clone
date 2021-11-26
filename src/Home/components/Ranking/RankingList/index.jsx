// libs
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// components
import RankingItem from './mains/RankingItem';
// style
import './style.scss';

const RankingList = ({ list, rankingType }) => (
  <div
    className={classNames(
      'ranking-list-wrapper',
      `${rankingType}-list-wrapper`,
    )}
  >
    <div className="ranking-list-wrapper-inner">
      {list.map((item, index) => (
        <RankingItem
          rankingItem={item}
          ordering={index + 1}
          rankingType={rankingType}
          key={item.id}
        />
      ))}
    </div>
  </div>
);

RankingList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  rankingType: PropTypes.string.isRequired,
};

export default RankingList;
