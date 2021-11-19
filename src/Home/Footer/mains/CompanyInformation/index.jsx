// libs
import React from 'react';
// components
import CompanyCertification from './mains/CompanyCertification';
// style
import './style.scss';

const CompanyInformation = () => (
  <div className="company-information-wrapper">
    <div className="company-information-wrapper-inner">
      <CompanyCertification />
    </div>
  </div>
);

export default CompanyInformation;
