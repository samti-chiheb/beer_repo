import React, { useState } from "react";
import { StyledButton, StyledSearchBox } from "../../components";

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
      <StyledSearchBox
        placeholder="Search..."
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <StyledButton onClick={handleSearch}>Search</StyledButton>
    </div>
  );
};

export default SearchComponent;
