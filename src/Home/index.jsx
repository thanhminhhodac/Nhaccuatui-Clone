import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import HotMV from './HotMV';
import NewPublished from './NewPublished';
import TopHundred from './TopHundred';
import Song from './Song';
import WeeklyArtist from './WeeklyArtist';
import PlaylistSuggestion from './PlaylistSuggestion';
import Banner from './Banner';
import HotTopic from './HotTopic';
import MVRanking from './MVRanking';
import SongRanking from './SongRanking';

import './style.scss';

function index() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-wrapper">
        <div className="container">
          <Slider />
          <div className="main">
            <div className="col-left">
              <PlaylistSuggestion />
              <PlaylistSuggestion />
              <PlaylistSuggestion />
              <NewPublished />
              <HotMV />
              <Song />
              <TopHundred />
              <WeeklyArtist />
            </div>
            <div className="col-right">
              <SongRanking />
              <MVRanking />
              <Banner />
              <HotTopic />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default index;
