// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import SectionHeading from '../../../../components/SectionHeading';
import CompanyImage from '../CompanyImage';
// style
import './style.scss';

const UltititlitiesConnectUs = ({ title, medias, apps }) => (
  <div className="ultilities-connect-us-wrapper">
    <div className="ultilities-connect-us-wrapper-inner">
      <SectionHeading label={title} />
      <div className="ultilities-connect-us-body">
        <div className="connect-us-body-wrapper social-media-wrapper">
          {medias.map((media) => (
            <CompanyImage
              key={media.id}
              imageSrc={media.sMImage}
              imageDescription={media.sMDescription}
              imageType="social-media"
            />
          ))}
        </div>
        <div className="connect-us-body-wrapper app-wrapper">
          {apps.map((app) => (
            <CompanyImage
              key={app.id}
              imageSrc={app.aImage}
              imageDescription={app.aDescription}
              imageType="app"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

UltititlitiesConnectUs.propTypes = {
  title: PropTypes.string.isRequired,
  medias: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      sMImage: PropTypes.string.isRequired,
      sMDescription: PropTypes.string.isRequired,
    }),
  ).isRequired,
  apps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      aImage: PropTypes.string.isRequired,
      aDescription: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default UltititlitiesConnectUs;
