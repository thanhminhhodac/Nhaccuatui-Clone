// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import FunctionalItem from './mains/FunctionalItem';
// styles
import './style.scss';

const Functional = ({ functionalList }) => (
  <div className="functional-wrapper">
    {functionalList.map((functionItem) => (
      <FunctionalItem image={functionItem.functionalImage} />
    ))}
  </div>
);

Functional.propTypes = {
  functionalList: PropTypes.arrayOf(
    PropTypes.shape({
      functionalImage: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Functional;
