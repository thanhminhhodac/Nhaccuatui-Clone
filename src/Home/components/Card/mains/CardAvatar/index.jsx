// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import CardImage from '../../components/CardImage';
// style
import './style.scss';

const CardAvatar = ({ cardAvatar, cardType }) => (
  <div className={['card-avatar-wrapper', `card-${cardType}`].join(' ')}>
    <CardImage
      cardImage={cardAvatar.avatarImage}
      cardDescription={cardAvatar.avatarDescription}
    />
  </div>
);
CardAvatar.propTypes = {
  cardAvatar: PropTypes.shape({
    avatarImage: PropTypes.string.isRequired,
    avatarDescription: PropTypes.string.isRequired,
  }).isRequired,
  cardType: PropTypes.string.isRequired,
};
export default CardAvatar;
