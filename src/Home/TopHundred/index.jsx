// libs
import React from 'react';
// styles
import './style.scss';
// components
import TopHundredBody from './mains/TopHundredBody';
import Heading from '../components/Heading';
// other
import { topHundredList } from '../../Datasource/Home/TopHundred';

const TopHundred = () => (
  <div className="top-hundred-wrapper">
    <div className="top-hundred-wrapper-inner">
      <Heading title="Top 100" icon />
      <TopHundredBody topHundredList={topHundredList} />
    </div>
  </div>
);

export default TopHundred;
