// lib
import React from 'react';
import PropTypes from 'prop-types';

// style
import './style.scss';

// other
import NewVersionImage from '../../../assets/ic_new.png';

const NewVersion = ({ url }) => (
  <div className="new-version">
    <a href={url} className="new-version-inner">
      <img
        src={NewVersionImage}
        alt="New Version of NCT"
        className="new-version-image"
      />
    </a>
  </div>
);

NewVersion.propTypes = {
  url: PropTypes.string,
};

NewVersion.defaultProps = {
  url: 'https://beta.nhaccuatui.com/',
};

export default NewVersion;
