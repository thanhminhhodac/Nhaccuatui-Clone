// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

const Content = ({ content, type, className }) => (
  <div className={className}>
    <span className={`${type}-label`}>{content}</span>
  </div>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['content', 'title']).isRequired,
  className: PropTypes.string.isRequired,
};
export default Content;
