// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import Card from '../../../components/Card';
// style
import './style.scss';

const HotMVBody = ({ mvList }) => (
  <div className="hot-mv-body">
    {mvList.map((mv) => (
      <Card cardItem={mv} cardType="hot-mv" key={mv.id} />
    ))}
  </div>
);

HotMVBody.propTypes = {
  mvList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HotMVBody;
