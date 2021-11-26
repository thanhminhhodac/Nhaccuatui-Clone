// libs
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';
// style
import './style.scss';
// components
import Card from '../../components/Card';
// hooks
import { useEventListener } from '../../../hooks/useEventListener';

const PlaylistSuggestionBody = ({ suggestList }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [listShow, setListShow] = useState([]);
  const [itemPerPage] = useState(5);
  const [hover, setHover] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const newList = suggestList.filter(
      (item, index) =>
        index >= (currentPage - 1) * itemPerPage &&
        index < currentPage * itemPerPage,
    );
    setListShow(newList);
  }, [currentPage]);

  const handleOnChangePage = (page) => setcurrentPage(page);
  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  const handleKeyDown = (e) => {
    if (hover) {
      e.preventDefault();
      switch (e.key) {
        case 'PageUp':
          {
            const nextpage = currentPage + 1;
            if (nextpage * itemPerPage > suggestList.length) break;
          }
          return setcurrentPage(currentPage + 1);
        case 'PageDown':
          {
            const nextpage = currentPage - 1;
            if (nextpage < 1) break;
          }
          return setcurrentPage(currentPage - 1);
        default:
          return setcurrentPage(currentPage);
      }
    }
  };

  useEventListener('keydown', handleKeyDown);
  useEventListener('mouseover', handleMouseOver, ref.current);
  useEventListener('mouseout', handleMouseOut, ref.current);

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
        onChange={handleOnChangePage}
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
