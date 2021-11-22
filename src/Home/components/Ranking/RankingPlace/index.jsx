// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

const RankingPlace = ({ places }) => (
  <div className="ranking-place-wrapper">
    <div className="ranking-place-wrapper-inner">
      {places.map((place) => (
        <div className="ranking-place-choose" key={place.lRP}>
          <span>{place.listPlace}</span>
        </div>
      ))}
    </div>
  </div>
);

RankingPlace.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      lRP: PropTypes.string.isRequired,
      listPlace: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RankingPlace;
