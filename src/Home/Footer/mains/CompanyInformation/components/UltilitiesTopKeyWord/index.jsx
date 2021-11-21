// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import SectionHeading from '../../../../components/SectionHeading';
// style
import './style.scss';

const UltilitiesTopKeyWord = ({ keywords, title }) => (
  <div className="ultilities-key-word-wrapper">
    <div className="ultilities-key-word-wrapper-inner">
      <SectionHeading label={title} />
      <div className="ultilities-key-word-body">
        {keywords.map((label) => (
          <div className="ultilities-key-word-item">
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

UltilitiesTopKeyWord.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default UltilitiesTopKeyWord;
