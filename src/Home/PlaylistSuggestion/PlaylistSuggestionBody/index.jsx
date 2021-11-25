// libs
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';
// style
import './style.scss';
// components
import Card from '../../components/Card';

const PlaylistSuggestionBody = ({ suggestList }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [listShow, setListShow] = useState([]);
  const [itemPerPage] = useState(5);

  const handleChangePage = (page) => setcurrentPage(page);

  useEffect(() => {
    const newList = suggestList.filter(
      (item, index) =>
        index >= (currentPage - 1) * itemPerPage &&
        index < currentPage * itemPerPage,
    );
    setListShow(newList);
  }, [currentPage]);

  return (
    <div className="playlist-suggestion-body">
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
        onChange={handleChangePage}
        total={suggestList.length}
        defaultPageSize={itemPerPage}
      />
    </div>
  );
};

PlaylistSuggestionBody.propTypes = {
  suggestList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PlaylistSuggestionBody;
