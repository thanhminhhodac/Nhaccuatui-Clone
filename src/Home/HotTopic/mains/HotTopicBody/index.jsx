// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import TopicImage from '../../components/TopicImage';
// style
import './style.scss';

const HotTopicBody = ({ hotTopicList }) => (
  <div className="hot-topic-body">
    {hotTopicList.map((topic) => (
      <TopicImage
        topicImage={topic.topicImage}
        description={topic.description}
      />
    ))}
  </div>
);

HotTopicBody.propTypes = {
  hotTopicList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HotTopicBody;
