// libs
import React from 'react';
import PropTypes from 'prop-types';
// style
import './style.scss';

const OrderingView = ({ title }) => (
  <div className="ordering-view-wrapper">
    <span>{title}</span>
  </div>
);

OrderingView.propTypes = { title: PropTypes.number };

OrderingView.defaultProps = { title: 0 };

export default OrderingView;
