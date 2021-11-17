// lib
import React from 'react';
// style
import './style.scss';
// components
import Content from './mains/Content';
import Button from './mains/Button';
// other
import { bannerData } from '../../dataSources/Home/Banner';

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
        title={bannerData.bannerTitle}
        content={bannerData.bannerContent}
      />
      <Button bannerButton={bannerData.bannerButton} />
    </div>
  </div>
);

export default Banner;
