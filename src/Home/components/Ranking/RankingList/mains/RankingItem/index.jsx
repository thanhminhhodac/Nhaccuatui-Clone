// libs
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// components
import Card from '../../../../Card';
import OrderingView from '../../components/OrderingView';
// style
import './style.scss';

const RankingItem = ({ rankingItem, ordering, rankingType }) => (
  <div
    className={classNames(
      'ranking-item-wrapper',
      `${rankingType}-item-wrapper`,
    )}
  >
    <div className="ranking-item-wrapper-inner">
      <OrderingView title={ordering} />
      <Card cardItem={rankingItem} cardType={rankingType} />
    </div>
  </div>
);

RankingItem.propTypes = {
  rankingItem: PropTypes.shape({}).isRequired,
  ordering: PropTypes.number.isRequired,
  rankingType: PropTypes.string.isRequired,
};

export default RankingItem;
