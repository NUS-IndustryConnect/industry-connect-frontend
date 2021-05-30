import React from 'react';

import './index.css';

const SearchBar = ({ keyword, onChange }) => {
  return (
    <input 
      className="searchbar"
      key="random1"
      value={keyword}
      placeholder={"Search"}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar
