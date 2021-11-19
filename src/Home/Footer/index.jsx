// libs
import React from 'react';
// components
import CompanyPartner from './mains/CompanyPartner';
import CompanyInformation from './mains/CompanyInformation';
import CompanyContact from './mains/CompanyContact';
// style
import './style.scss';

function index() {
  return (
    <div className="footer-wrapper">
      <div className="footer-wrapper-inner">
        <CompanyPartner />
        <CompanyInformation />
        <CompanyContact />
      </div>
    </div>
  );
}

export default index;
