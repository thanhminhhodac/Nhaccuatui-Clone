// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import Card from '../../../../Card';
import OrderingView from '../../components/OrderingView';
// style
import './style.scss';

const RankingItem = ({ rankingItem, ordering }) => (
  <div className="ranking-item-wrapper">
    <div className="ranking-item-wrapper-inner">
      <OrderingView title={ordering} />
      <Card cardItem={rankingItem} cardType="song-ranking" />
    </div>
  </div>
);

RankingItem.propTypes = {
  rankingItem: PropTypes.shape({}).isRequired,
  ordering: PropTypes.number.isRequired,
};

export default RankingItem;
