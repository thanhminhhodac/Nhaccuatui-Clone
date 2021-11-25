// libs
import React from 'react';
import PropTypes from 'prop-types';
// components
import Card from '../../../components/Card';
// style
import './style.scss';

const NewPublishedBody = ({ publishedList }) => (
  <div className="new-published-body">
    {publishedList.map((publishedItem) => (
      <Card
        key={publishedItem.id}
        cardItem={publishedItem}
        cardType="new-published"
      />
    ))}
  </div>
);

NewPublishedBody.propTypes = {
  publishedList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default NewPublishedBody;
