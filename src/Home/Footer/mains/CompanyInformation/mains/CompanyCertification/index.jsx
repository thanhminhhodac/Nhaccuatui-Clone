// libs
import React from 'react';
// components
import CompanyImage from '../../components/CompanyImage';
import CompanyCertificationInfo from '../../components/CompanyCertificationInfo';
// style
import './style.scss';
// ohter
import companyLogo from '../../../../../../assets/Footer/t_logo_company.png';
import companyDMCA from '../../../../../../assets/Footer/t_dmca.png';
import companyBCT from '../../../../../../assets/Footer/t_bo_cong_thuong.png';

const CompanyCertification = () => (
  <div className="company-certification-wrapper">
    <div className="company-certification-wrapper-inner">
      <CompanyImage
        imageSrc={companyLogo}
        imageDescription="LogoImage"
        imageType="logo"
      />
      <CompanyCertificationInfo />
      <CompanyImage
        imageSrc={companyBCT}
        imageDescription="Bộ công thương"
        imageType="certificate"
      />
      <CompanyImage
        imageSrc={companyDMCA}
        imageDescription="DMCA"
        imageType="certificate"
      />
    </div>
  </div>
);

export default CompanyCertification;
