// libs
import React from 'react';
// components
import CompanyCertification from './mains/CompanyCertification';
import CompanyUltilities from './mains/CompanyUltilities';
// style
import './style.scss';

const CompanyInformation = () => (
  <div className="company-information-wrapper">
    <div className="company-information-wrapper-inner">
      <CompanyUltilities />
      <CompanyCertification />
    </div>
  </div>
);

export default CompanyInformation;
