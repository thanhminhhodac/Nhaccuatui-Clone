// libs
import React from 'react';
import PropTypes from 'prop-types';

const RankingPlace = ({ places }) => (
  <div className="ranking-place-wrapper">
    <div className="ranking-place-wrapper-inner">
      {places.map((place) => (
        <div className="ranking-place-choose" key={place.sRP}>
          {place.songPlace}
        </div>
      ))}
    </div>
  </div>
);

RankingPlace.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      sRP: PropTypes.string.isRequired,
      songPlace: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RankingPlace;
