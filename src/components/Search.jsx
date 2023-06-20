import React, { useState } from "react";

const SearchComponent = ({ onSearch, onPageChange }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
    onPageChange(1);
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
