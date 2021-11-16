// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

const TopicImage = ({ topicImage, description }) => (
  <div className="hot-topic-image">
    <img src={topicImage} alt={description} />
  </div>
);

TopicImage.propTypes = {
  topicImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TopicImage;
