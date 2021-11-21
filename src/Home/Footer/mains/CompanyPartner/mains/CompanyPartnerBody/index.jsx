// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

const CompanyPartnerBody = ({ partnerList }) => (
  <div className="company-partner-body-wrapper">
    <div className="company-partner-body-wrapper-inner">
      {partnerList.map((partner) => (
        <div className="partner-item-wrapper" key={partner.pId}>
          <div className="partner-item-wrapper-inner">
            <img
              src={partner.pImage}
              alt={partner.pDescription}
              className="partner-item-image"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

CompanyPartnerBody.propTypes = {
  partnerList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CompanyPartnerBody;
