// lib
import React from 'react';
import PropTypes from 'prop-types';
// components
import CardAvatar from './mains/CardAvatar';
import CardContent from './mains/CardContent';
// style
import './style.scss';

const Card = ({ cardItem, cardType }) => (
  <div className={['card', `card-${cardType}-wrapper`].join(' ')}>
    <CardAvatar cardAvatar={cardItem.avatar} cardType={cardType} />
    {cardItem.content && (
      <CardContent cardContent={cardItem.content} cardType={cardType} />
    )}
  </div>
);

Card.propTypes = {
  cardItem: PropTypes.shape({
    avatar: PropTypes.shape({}).isRequired,
    content: PropTypes.shape({}),
  }).isRequired,
  cardType: PropTypes.string,
};

Card.defaultProps = {
  cardType: null,
};

export default Card;
