// libs
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import classNames from 'classnames';
// components
import Card from '../../../components/Card';
// style
import './style.scss';
// redux
import { loadArtistAction } from '../../../../actions/artistAction';

const WeeklyArtistBody = ({ artists, loadArtist, isLoading }) => {
  useEffect(() => {
    loadArtist();
  }, []);

  return (
    <div
      className={classNames({ 'weekly-artis-body': true, loading: isLoading })}
    >
      {isLoading === true && (
        <Spin tip="Loading..." className="loading-artist">
          <LoadingOutlined
            style={{ fontSize: 32 }}
            spin
            className="loading-artist-icon"
          />
        </Spin>
      )}
      {isLoading === false &&
        artists.length > 0 &&
        artists.map((artistItem) => (
          <Card cardItem={artistItem} cardType="artist" key={artistItem.id} />
        ))}
    </div>
  );
};
WeeklyArtistBody.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadArtist: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  artists: state.artistWeekly.artist,
  isLoading: state.artistWeekly.isLoading,
});
const mapDispatchToProps = {
  loadArtist: loadArtistAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyArtistBody);
