// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import CardImage from '../../components/CardImage';
// style
import './style.scss';

const typeCardPlay = ['playlist-suggestion', 'new-published'];

const CardAvatar = ({ cardAvatar, cardType, ...props }) => (
  <div className={['card-avatar-wrapper', `card-${cardType}`].join(' ')}>
    <CardImage
      cardImage={cardAvatar.avatarImage}
      cardDescription={cardAvatar.avatarDescription}
      cardPlay={typeCardPlay.includes(cardType)}
    />
    {props.children}
  </div>
);
CardAvatar.propTypes = {
  cardAvatar: PropTypes.shape({
    avatarImage: PropTypes.string.isRequired,
    avatarDescription: PropTypes.string.isRequired,
  }).isRequired,
  cardType: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default CardAvatar;
