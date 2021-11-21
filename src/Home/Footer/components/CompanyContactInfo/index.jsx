// libs
import React from 'react';
import PropTypes from 'prop-types';
import { PhoneFilled, MailFilled, EnvironmentFilled } from '@ant-design/icons';
// style
import './style.scss';

const CompanyContactInfo = ({ contact }) => (
  <div className="company-contact-info-wrapper">
    <div className="company-contact-info company-location">
      <EnvironmentFilled className="company-contact-info-icon" />
      <span className="company-location-label">{contact.companyLocation}</span>
    </div>
    <div className="company-contact-info company-mail">
      <MailFilled className="company-contact-info-icon" />
      <span className="company-mail-label">{contact.companyMail}</span>
    </div>
    <div className="company-contact-info company-Phone">
      <PhoneFilled className="company-contact-info-icon" />
      <span className="company-Phone-label">{contact.companyPhone}</span>
    </div>
  </div>
);

CompanyContactInfo.propTypes = {
  contact: PropTypes.shape({
    companyLocation: PropTypes.string.isRequired,
    companyMail: PropTypes.string.isRequired,
    companyPhone: PropTypes.string.isRequired,
  }).isRequired,
};

export default CompanyContactInfo;
