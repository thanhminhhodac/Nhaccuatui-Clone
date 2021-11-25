// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import FunctionalItem from './mains/FunctionalItem';
import LocaleSelector from './mains/LocaleSelector';
// styles
import './style.scss';

const Functional = ({ functionalList }) => (
  <div className="functional-wrapper">
    {functionalList.map((functionItem) => (
      <FunctionalItem
        image={functionItem.functionalImage}
        key={functionItem.id}
      />
    ))}
    <LocaleSelector />
  </div>
);

Functional.propTypes = {
  functionalList: PropTypes.arrayOf(
    PropTypes.shape({
      functionalImage: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Functional;
