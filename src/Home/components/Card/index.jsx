// lib
import React from 'react';
import PropTypes from 'prop-types';
// components
import CardAvatar from './mains/CardAvatar';
import CardContent from './mains/CardContent';
import CardDetail from './components/CardDetail';
// style
import './style.scss';

const Card = ({ cardItem, cardType }) => (
  <div className={['card', `card-${cardType}-wrapper`].join(' ')}>
    {cardItem.avatar && (
      <CardAvatar cardAvatar={cardItem.avatar} cardType={cardType}>
        {cardItem.detail && (
          <CardDetail cardDetail={cardItem.detail} cardType={cardType} />
        )}
      </CardAvatar>
    )}
    {cardItem.content && (
      <CardContent cardContent={cardItem.content} cardType={cardType} />
    )}
  </div>
);

Card.propTypes = {
  cardItem: PropTypes.shape({
    avatar: PropTypes.shape({}),
    content: PropTypes.shape({}),
    detail: PropTypes.shape({}),
  }).isRequired,
  cardType: PropTypes.string,
};

Card.defaultProps = {
  cardType: null,
};

export default Card;
