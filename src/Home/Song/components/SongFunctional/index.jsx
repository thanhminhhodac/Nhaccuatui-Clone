// lib
import React from 'react';
import { PlusCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
// style
import './style.scss';

const SongFunctional = () => (
  <div className="song-functional-wrapper">
    <div className="song-functional-wrapper-inner">
      <PlayCircleOutlined className="song-functional-icon" />
      <PlusCircleOutlined className="song-functional-icon" />
    </div>
  </div>
);

export default SongFunctional;
