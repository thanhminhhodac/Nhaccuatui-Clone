// libs
import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
// components
import SectionHeading from '../../../../components/SectionHeading';
// style
import './style.scss';

const UltilitiesSection = ({ labels, title }) => (
  <div className="ultilities-section-wrapper">
    <div className="ultilities-section-wrapper-inner">
      <SectionHeading label={title} />
      <div className="ultilities-section-label-body">
        {labels.map((label) => (
          <div className="ultilities-section-label-item" key={label}>
            <RightOutlined className="right-icon" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

UltilitiesSection.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default UltilitiesSection;
