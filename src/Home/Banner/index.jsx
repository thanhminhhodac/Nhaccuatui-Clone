// lib
import React from 'react';
// style
import './style.scss';
// components
import Content from './mains/Content';
import Button from './mains/Button';
// other
import { bannerData } from '../../Datasource/Home/Banner';

const Banner = () => (
  <div className="banner-wrapper">
    <div
      className="banner-wrapper-inner"
      style={{
        background: `url(${bannerData.bannerBackground}) no-repeat`,
        backgroundSize: 'cover',
      }}
    >
      <Content
        className="banner-content"
        type="title"
        content={bannerData.bannerTitle}
      />
      <Content
        className="banner-content"
        type="content"
        content={bannerData.bannerContent}
      />
      <Button bannerButton={bannerData.bannerButton} />
    </div>
  </div>
);

export default Banner;
