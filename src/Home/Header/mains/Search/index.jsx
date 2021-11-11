// libs
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// component
import { SearchOutlined } from '@ant-design/icons';

// style
import './style.scss';

const Search = () => {
  const [searchKey, setSearchKey] = useState('');

  const handleSearchChange = e => setSearchKey(e.target.value);
  return (
    <div className="search-inner">
      <div className="search-form">
        <SearchOutlined className="search-icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Tìm kiếm"
          value={searchKey}
          name="search-input"
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default Search;
