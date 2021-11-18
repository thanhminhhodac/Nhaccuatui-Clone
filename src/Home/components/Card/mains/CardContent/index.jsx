// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';
// component
import CardArtistList from '../../components/CardArtistList';

const CardContent = ({ cardContent, cardType }) => (
  <div className={['card-content-wrapper', `card-${cardType}`].join(' ')}>
    <span className="card-content-title">{cardContent.title}</span>
    {cardContent.artist && <CardArtistList artistList={cardContent.artist} />}
  </div>
);

CardContent.propTypes = {
  cardContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  cardType: PropTypes.string.isRequired,
};

export default CardContent;
