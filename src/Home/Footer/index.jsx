// libs
import React from 'react';
// components
import ConnectSlider from './mains/ConnectSlider';
import CompanyInformation from './mains/CompanyInformation';
import CompanyContact from './mains/CompanyContact';
// style
import './style.scss';

function index() {
  return (
    <div className="footer-wrapper">
      <div className="footer-wrapper-inner">
        <ConnectSlider />
        <CompanyInformation />
        <CompanyContact />
      </div>
    </div>
  );
}

export default index;
