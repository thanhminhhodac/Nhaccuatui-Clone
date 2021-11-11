// lib
import React from 'react';
import PropTypes from 'prop-types';

// style
import './style.scss';

const NewVersion = ({ url }) => (
  <div className="new-version">
    <a className="new-version-link" href={url}>
      #phienbanmoi
    </a>
  </div>
);

NewVersion.propTypes = {
  url: PropTypes.string.isRequired,
};

export default NewVersion;
