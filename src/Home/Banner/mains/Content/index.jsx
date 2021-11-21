// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

const Content = ({ content, title }) => (
  <>
    <div className="banner-content">
      <span className="title-label">{title}</span>
    </div>
    <div className="banner-content">
      <span className="content-label">{content}</span>
    </div>
  </>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Content;
