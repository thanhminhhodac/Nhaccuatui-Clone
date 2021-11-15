// libs
import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ content, type, className }) => (
  <div className={className}>
    <span className={type}>{content}</span>
  </div>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['Content', 'Title']).isRequired,
  className: PropTypes.string.isRequired,
};
export default Content;
