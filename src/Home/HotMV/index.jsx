// lib
import React from 'react';
// style
import './style.scss';
// components
import Heading from '../components/Heading';
import HotMVBody from './mains/HotMVBody';
// other
import { hotMVList } from '../../dataSources/Home/HotMV';

const HotMV = () => (
  <div className="hot-mv-wrapper">
    <div className="hot-mv-wrapper-inner">
      <Heading title="HOT MV" icon />
      <HotMVBody mvList={hotMVList} />
    </div>
  </div>
);

export default HotMV;
