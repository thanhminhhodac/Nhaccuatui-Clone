// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import Card from '../../../components/Card';
// style
import './style.scss';

const TopHundredBody = ({ topHundredList }) => (
  <div className="top-hundred-body">
    {topHundredList.map((cardItem) => (
      <Card cardItem={cardItem} cardType="top-hundred" />
    ))}
  </div>
);

TopHundredBody.propTypes = {
  topHundredList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TopHundredBody;
