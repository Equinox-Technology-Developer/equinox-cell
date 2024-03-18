// components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchQuery, handleSearchInputChange }) => {
  return (
    <input
      type="text"
      placeholder="Search jobs..."
      value={searchQuery}
      onChange={handleSearchInputChange}
    />
  );
};

export default SearchBar;
