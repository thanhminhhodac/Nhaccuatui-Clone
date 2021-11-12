// libs
import React from 'react';
import PropTypes from 'prop-types';

// style

const Heading = ({ title }) => (
  <div className="playlist-suggestion-heading">
    <p>{title}</p>
  </div>
);

Heading.propTypes = { title: PropTypes.string };
Heading.defaultProps = { title: 'Playlist Suggestions' };

export default Heading;
