// lib
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';
// components
import { CustomerServiceOutlined } from '@ant-design/icons';

const CardDetail = ({ cardDetail, cardType }) => (
  <div className={['card-detail-wrapper', `card-detail-${cardType}`].join(' ')}>
    <div className="card-detail-wrapper-inner">
      {cardDetail.listenAmount && (
        <div className="card-detail-listen">
          <CustomerServiceOutlined />
          {cardDetail.listenAmount}
        </div>
      )}
    </div>
  </div>
);

CardDetail.propTypes = {
  cardDetail: PropTypes.shape({
    listenAmount: PropTypes.number,
  }).isRequired,
  cardType: PropTypes.string.isRequired,
};

export default CardDetail;
