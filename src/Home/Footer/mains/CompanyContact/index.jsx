// libs
import React from 'react';
// components
import CompanyContactInfo from '../../components/CompanyContactInfo';
// style
import './style.scss';

const contactData = {
  companyLocation:
    'Tầng 19, Tòa nhà The 67B Tower, Số 67 đường Hoàng Văn Thái, phường Tân Phú, quận 7, TP HCM.',
  companyMail: 'support@nct.vn',
  companyPhone: '(028) 3868 7979',
};

const CompanyContact = () => (
  <div className="company-contact-wrapper">
    <div className="company-contact-wrapper-inner">
      <CompanyContactInfo contact={contactData} />
      <div className="company-contact-copyrighted">
        <span className="company-contact-copyright-label">
          © NCT Corp.All rights reserved.
        </span>
      </div>
    </div>
  </div>
);

export default CompanyContact;
