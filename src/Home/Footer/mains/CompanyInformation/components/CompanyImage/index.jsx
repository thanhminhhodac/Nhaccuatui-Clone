// libs
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// style
import './style.scss';

const CompanyImage = ({ imageSrc, imageDescription, imageType }) => {
  const imageClassNames = classNames({
    'company-image-wrapper': true,
    [`${imageType}-image`]: true,
  });
  return (
    <div className={imageClassNames}>
      <img src={imageSrc} alt={imageDescription} className="company-image" />
    </div>
  );
};

CompanyImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  imageDescription: PropTypes.string.isRequired,
};

export default CompanyImage;
