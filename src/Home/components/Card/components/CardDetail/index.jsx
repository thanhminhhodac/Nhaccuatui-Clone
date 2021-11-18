// lib
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';
// components
import { CustomerServiceOutlined, EyeFilled } from '@ant-design/icons';

const CardDetail = ({ cardDetail, cardType }) => (
  <div className={['card-detail-wrapper', `card-detail-${cardType}`].join(' ')}>
    <div className="card-detail-wrapper-inner">
      {cardDetail.listenAmount && (
        <div className="card-detail detail-listen">
          <CustomerServiceOutlined />
          {cardDetail.listenAmount}
        </div>
      )}
      {cardDetail.watchAmount && (
        <div className="card-detail detail-watch">
          <EyeFilled />
          {cardDetail.watchAmount}
        </div>
      )}
      {cardDetail.videoTime && (
        <div className="card-detail detail-time">{cardDetail.videoTime}</div>
      )}
    </div>
  </div>
);

CardDetail.propTypes = {
  cardDetail: PropTypes.shape({
    listenAmount: PropTypes.number,
    watchAmount: PropTypes.number,
    videoTime: PropTypes.string,
  }).isRequired,
  cardType: PropTypes.string.isRequired,
};

export default CardDetail;
