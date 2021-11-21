// lib
import React from 'react';
// style
import './style.scss';
// components
import Heading from '../components/Heading';
import HotTopicBody from './mains/HotTopicBody';
// other
import { hotTopicList } from '../../dataSources/Home/HotTopic';

const HotTopic = () => (
  <div className="hot-topic-wrapper">
    <div className="hot-topic-wrapper-inner">
      <Heading title="Hot Topic" icon />
      <HotTopicBody hotTopicList={hotTopicList} />
    </div>
  </div>
);

export default HotTopic;
