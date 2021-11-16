// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import CardImage from '../../components/CardImage';
import CardIcon from '../../components/CardIcon';
// style
import './style.scss';

const CardBody = ({ imageUrl, suggestion }) => (
  <div className="card-body">
    <CardImage imageUrl={imageUrl} altImage={suggestion} />
    <CardIcon type="play" />
  </div>
);
CardBody.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  suggestion: PropTypes.string.isRequired,
};

export default CardBody;
