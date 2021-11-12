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

// other
import sPL1 from './assets/playlistsuggestion/1.jpg';
import sPL2 from './assets/playlistsuggestion/2.jpg';
import sPL3 from './assets/playlistsuggestion/3.jpg';
import sPL4 from './assets/playlistsuggestion/4.jpg';
import sPL5 from './assets/playlistsuggestion/5.jpg';

const Home = () => {
  const suggestList = [
    {
      imageUrl: sPL1,
      suggestion: 'Gái chiếc',
    },
    {
      imageUrl: sPL2,
      suggestion: 'Trai đơn',
    },
    {
      imageUrl: sPL3,
      suggestion: "I'm single",
    },
    {
      imageUrl: sPL4,
      suggestion: 'V-Rap cho người độc thân',
    },
    {
      imageUrl: sPL5,
      suggestion: 'Độc thân vui vẻ',
    },
  ];
  return (
    <div className="home-wrapper">
      <Header />
      <div className="main-wrapper">
        <div className="main-wrapper-inner">
          <Slider />
          <PlaylistSuggestion
            title="Nếu bạn độc thân"
            suggestList={suggestList}
          />
          <PlaylistSuggestion
            title="Nếu bạn độc thân"
            suggestList={suggestList}
          />
          <PlaylistSuggestion
            title="Nếu bạn độc thân"
            suggestList={suggestList}
          />

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
};

export default Home;
