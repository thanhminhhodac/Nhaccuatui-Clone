// libs
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// components
import Card from '../../../components/Card';
import Loading from '../../../components/Loading';
// style
import './style.scss';
// redux
import { loadArtistAction } from '../../../../actions/artistAction';

// eslint-disable-next-line object-curly-newline
const WeeklyArtistBody = ({ artists, loadArtist, isLoading, isError }) => {
  const [reload, setReload] = useState(false);

  useEffect(() => {
    loadArtist(reload);
    const interval = setInterval(() => setReload(!reload), 5000);
    return () => clearInterval(interval);
  }, [reload]);

  return (
    <div className="weekly-artis-body">
      <Loading isLoading={isLoading} isError={isError}>
        <div className="weekly-artis-body-inner">
          {artists &&
            artists.map((artistItem) => (
              <Card
                cardItem={artistItem}
                cardType="artist"
                key={artistItem.id}
              />
            ))}
        </div>
      </Loading>
    </div>
  );
};
WeeklyArtistBody.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  loadArtist: PropTypes.func.isRequired,
};

WeeklyArtistBody.defaultProps = {
  artists: null,
};

const mapStateToProps = (state) => ({
  artists: state.artistWeekly.artist,
  isLoading: state.artistWeekly.isLoading,
  isError: state.artistWeekly.isError,
});
const mapDispatchToProps = {
  loadArtist: loadArtistAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyArtistBody);
