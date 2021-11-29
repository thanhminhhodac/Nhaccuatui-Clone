// libs
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';
// style
import './style.scss';
// components
import Card from '../../components/Card';
// hooks
import { usePagination } from '../../../hooks/usePagination';

const PlaylistSuggestionBody = ({ suggestList }) => {
  const [listShow, setListShow] = useState([]);
  const [currentPage, beginItem, endItem, setOnChangePage, ref] = usePagination(
    {
      currentPage: 1,
      itemsPerPage: 5,
      totalItem: suggestList.length,
    },
  );

  useEffect(() => {
    const newList = suggestList.slice(beginItem, endItem);
    setListShow(newList);
  }, [currentPage]);

  return (
    <div className="playlist-suggestion-body" ref={ref}>
      <div className="playlist-suggestion-body-card">
        {listShow.map((suggest) => (
          <Card
            cardItem={suggest}
            cardType="playlist-suggestion"
            key={suggest.id}
          />
        ))}
      </div>
      <Pagination
        className="playlist-suggestion-pagination"
        current={currentPage}
        onChange={setOnChangePage}
        total={suggestList.length}
        defaultPageSize={5}
      />
    </div>
  );
};

PlaylistSuggestionBody.propTypes = {
  suggestList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PlaylistSuggestionBody;
