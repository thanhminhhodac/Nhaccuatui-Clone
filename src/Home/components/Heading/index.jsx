// libs
import React from 'react';
import PropTypes from 'prop-types';

// style
import './style.scss';

const Heading = ({ title }) => (
  <div className="heading">
    <span className="heading-title">{title}</span>
  </div>
);

Heading.propTypes = { title: PropTypes.string };
Heading.defaultProps = { title: 'Playlist Suggestions' };

export default Heading;
