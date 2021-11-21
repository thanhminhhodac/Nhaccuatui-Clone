// lib
import React from 'react';
// components
import Heading from '../components/Heading';
import NewPublishedBody from './mains/NewPublishedBody';
// styles
import './style.scss';
// other
import { newPublishedList } from '../../dataSources/Home/NewPublished';

const NewPublished = () => (
  <div className="new-published-wrapper">
    <div className="new-published-wrapper-inner">
      <Heading title="Mới phát hành" icon />
      <NewPublishedBody publishedList={newPublishedList} />
    </div>
  </div>
);

export default NewPublished;
