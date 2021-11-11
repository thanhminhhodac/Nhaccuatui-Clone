// libs
import React from 'react';

// components
import Logo from './Logo';
import NewVersion from './NewVersion';
import Menu from './Menu';
import Authentication from './Authentication';
import Functional from './Functional';
import Search from './Search';

// styles
import './style.scss';

// other
import MoreImage from '../../assets/ic_more_new.png';
import UploadeImage from '../../assets/ic_upload.png';
import StoreImage from '../../assets/ic_store.png';

const Header = () => (
  <div className="header-wrapper">
    <div className="header-inner">
      <div className="header-left">
        <Logo url="https://www.nhaccuatui.com/" />
        <NewVersion url="https://beta.nhaccuatui.com/" />
        <Menu title="Bài Hát" />
        <Menu title="Playlist" />
        <Menu title="Tuyển Tập" />
        <Menu title="Video" />
        <Menu title="BXH" />
        <Menu title="Chủ Đề" />
        <Menu title="Top 100" />
        <Menu title="Khác" imageUrl={MoreImage} />
      </div>
      <div className="header-right">
        <Search />
        <Functional url={StoreImage} />
        <Functional url={UploadeImage} />
        <div className="header-divider" />
        <Authentication />
      </div>
    </div>
  </div>
);

export default Header;
