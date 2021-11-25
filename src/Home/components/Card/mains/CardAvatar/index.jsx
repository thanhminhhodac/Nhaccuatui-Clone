// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import { PlayCircleFilled } from '@ant-design/icons';
import CardImage from '../../components/CardImage';
// style
import './style.scss';

const typeCardPlay = [
  'playlist-suggestion',
  'new-published',
  'hot-mv',
  'mv-ranking',
];

const CardAvatar = ({ cardAvatar, cardType, ...props }) => (
  <div className={['card-avatar-wrapper', `card-${cardType}`].join(' ')}>
    <CardImage
      cardImage={cardAvatar.avatarImage}
      cardDescription={cardAvatar.avatarDescription}
      cardPlay={cardType?.indexOf(typeCardPlay) !== -1}
    />
    {typeCardPlay.includes(cardType) && (
      <PlayCircleFilled className="card-icon-play" />
    )}
    {props.children}
  </div>
);
CardAvatar.propTypes = {
  cardAvatar: PropTypes.shape({
    avatarImage: PropTypes.string.isRequired,
    avatarDescription: PropTypes.string.isRequired,
  }).isRequired,
  cardType: PropTypes.string.isRequired,
  children: PropTypes.node,
};

CardAvatar.defaultProps = {
  children: null,
};
export default CardAvatar;
