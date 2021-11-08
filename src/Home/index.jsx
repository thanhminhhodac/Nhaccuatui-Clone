// libs
import React from 'react';

// components
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

// styles
import './style.scss';

const Home = () => (
  <div className="home-wrapper">
    <Header />
    <div className="main-wrapper">
      <div className="main-wrapper-inner">
        <Slider />
        <PlaylistSuggestion />
        <PlaylistSuggestion />
        <PlaylistSuggestion />
        <NewPublished />
        <HotMV />
        <Song />
        <TopHundred />
        <WeeklyArtist />
        <SongRanking />
        <MVRanking />
        <Banner />
        <HotTopic />
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
