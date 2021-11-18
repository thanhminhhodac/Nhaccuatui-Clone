// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import Card from '../../../components/Card';

const RankingPlace = ({ list }) => (
  <div className="ranking-place-wrapper">
    <div className="ranking-place-wrapper-inner">
      {list.map((item) => (
        <Card cardItem={item} cardType="ranking" key={item.id} />
      ))}
    </div>
  </div>
);

RankingPlace.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default RankingPlace;
