// lib
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';
// other
const NewVersion = ({ newVersionItem }) => (
  <div className="new-version-wrapper">
    <a href={newVersionItem.newVersionUrl} className="new-version-link">
      <img
        src={newVersionItem.newVersionImage}
        alt="New Version of NCT"
        className="new-version-image"
      />
    </a>
  </div>
);

NewVersion.propTypes = {
  newVersionItem: PropTypes.shape({
    newVersionImage: PropTypes.string.isRequired,
    newVersionUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewVersion;
