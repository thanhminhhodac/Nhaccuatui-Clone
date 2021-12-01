// libs
import React from 'react';
// component
import SectionHeading from '../../components/SectionHeading';
import CompanyPartnerBody from './mains/CompanyPartnerBody';
// style
import './style.scss';
// ohter
import partnerList from '../../../../dataSources/Home/Footer/companyPartner';

/**
 * @module CompanyPartner - returns the company partner details
 * @returns {React.ReactElement}
 */

const CompanyPartner = () => (
  <div className="company-partner-wrapper">
    <div className="company-partner-wrapper-inner">
      <SectionHeading label="Liên kết và hợp tác" />
      <CompanyPartnerBody partnerList={partnerList} />
    </div>
  </div>
);

export default CompanyPartner;
