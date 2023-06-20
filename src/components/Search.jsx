import React, { useState } from "react";


const SearchComponent = ({ onSearch, onPageChange }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // handle text search and pass it 
    onSearch(searchText);

    // set current page to 1
    onPageChange(1);
  };

  return (
    <div>
      <input
      placeholder="Search..."
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
