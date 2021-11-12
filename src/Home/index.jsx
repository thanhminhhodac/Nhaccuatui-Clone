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
import sPL6 from './assets/playlistsuggestion/6.jpg';
import sPL7 from './assets/playlistsuggestion/7.jpg';
import sPL8 from './assets/playlistsuggestion/8.jpg';
import sPL9 from './assets/playlistsuggestion/9.jpg';
import sPL10 from './assets/playlistsuggestion/10.jpg';

const Home = () => {
  const suggestList = [
    {
      title: 'Nếu bạn độc thân',
      list: [
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
      ],
    },
    {
      title: 'Khám phá mới',
      list: [
        {
          imageUrl: sPL6,
          suggestion: 'Giai điệu Bắt Tai US - UK',
        },
        {
          imageUrl: sPL7,
          suggestion: 'V-POP Những bản hit Quốc Dân',
        },
        {
          imageUrl: sPL8,
          suggestion: 'Nhạc mới tuần này',
        },
        {
          imageUrl: sPL9,
          suggestion: 'Ballad Việt không thể bỏ qua',
        },
        {
          imageUrl: sPL10,
          suggestion: 'Future K-POP 2021',
        },
      ],
    },
    {
      title: 'Không gian acountic',
      list: [
        {
          imageUrl: sPL6,
          suggestion: 'Giai điệu Bắt Tai US - UK',
        },
        {
          imageUrl: sPL7,
          suggestion: 'V-POP Những bản hit Quốc Dân',
        },
        {
          imageUrl: sPL8,
          suggestion: 'Nhạc mới tuần này',
        },
        {
          imageUrl: sPL9,
          suggestion: 'Ballad Việt không thể bỏ qua',
        },
        {
          imageUrl: sPL10,
          suggestion: 'Future K-POP 2021',
        },
      ],
    },
  ];
  return (
    <div className="home-wrapper">
      <Header />
      <div className="main-wrapper">
        <div className="main-wrapper-inner">
          <Slider />
          {
            // eslint-disable-next-line arrow-parens
            suggestList.map(suggest => (
              <PlaylistSuggestion
                title={suggest.title}
                suggestList={suggest.list}
              />
            ))
          }
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
