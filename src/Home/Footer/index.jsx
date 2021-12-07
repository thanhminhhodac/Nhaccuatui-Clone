// libs
import React from 'react';
// components
import CompanyPartner from './mains/CompanyPartner';
import CompanyInformation from './mains/CompanyInformation';
import CompanyContact from './mains/CompanyContact';
// style
import './style.scss';

/**
 * @module Footer - returns Footer of hompage
 * @returns {React.ReactElement}
 */

const Footer = () => (
  <div className="footer-wrapper">
    <div className="footer-wrapper-inner">
      <CompanyPartner />
      <CompanyInformation />
      <CompanyContact />
    </div>
  </div>
);

export default Footer;
