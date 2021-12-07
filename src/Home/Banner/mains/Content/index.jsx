// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

/**
 *  @module Content - Return content of banner component
 *  @param {Object} props - properties
 *  @param {string} props.content - The content of the banner
 *  @param {string} props.title - The title of the banner
 *  @returns {React.ReactFragment}
 */

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
