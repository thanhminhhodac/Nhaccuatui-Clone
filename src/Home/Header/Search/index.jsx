// libs
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// style
import './style.scss';

// components
import { SearchOutlined } from '@ant-design/icons';

const Search = () => {
  const [searchKey, setSearchKey] = useState('');

  // eslint-disable-next-line arrow-parens
  const handleOnChange = e => {
    setSearchKey(e.target.value);
  };

  return (
    <div className="search">
      <div className="search-form">
        <SearchOutlined className="search-icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Tìm kiếm"
          value={searchKey}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default Search;
