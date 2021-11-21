// libs
import React from 'react';
// style
import './style.scss';
// component
import UltilitiesSection from '../../components/UltilitiesSection';
import UltilitiesTopKeyWord from '../../components/UltilitiesTopKeyWord';
import UltilitiesConnectUs from '../../components/UltilitiesConnectUs';
// other
import {
  supportlabels,
  moreServicelabels,
  keyWords,
  socialMedias,
  apps,
} from '../../../../../../dataSources/Home/Footer/companyInformation';

const CompanyUltilities = () => (
  <div className="company-ulitilities-wrapper">
    <div className="company-ulitilities-wrapper-inner">
      <UltilitiesSection labels={supportlabels} title="Hỗ trợ" />
      <UltilitiesSection labels={moreServicelabels} title="Sản phẩm khác" />
      <UltilitiesTopKeyWord keywords={keyWords} title="Top Từ khóa" />
      <UltilitiesConnectUs
        medias={socialMedias}
        apps={apps}
        title="Kết nối với chúng tôi"
      />
    </div>
  </div>
);
export default CompanyUltilities;
