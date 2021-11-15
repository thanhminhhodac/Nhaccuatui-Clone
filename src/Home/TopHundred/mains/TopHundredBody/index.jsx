// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import Card from '../../../components/Card';
// style
import './style.scss';

const TopHundredBody = ({ topHundredList }) => (
  <div className="top-hundred-body">
    {topHundredList.map((card) => (
      <Card cardImage={card.topicImage} description={card.description} />
    ))}
  </div>
);

TopHundredBody.propTypes = {
  topHundredList: PropTypes.arrayOf(
    PropTypes.shape({
      topicImage: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TopHundredBody;
