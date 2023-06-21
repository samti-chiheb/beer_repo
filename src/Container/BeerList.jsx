import React, { useState } from "react";
import useBeers from "../hook/useBeers";
import { StyledButton, Filter, Search, Pagination, ListTable } from "../components";

const BeerList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filtreQuery, setFiltreQuery] = useState("");
  const [caching, setCaching] = useState(true);

  // Call the useBeers hook to fetch and manage responses
  const {
    data,
    currentPage,
    lastPage,
    isLoading,
    handlePageChange,
  } = useBeers(caching, filtreQuery, searchQuery);

  // Reset the search and filter parameters
  const handleReset = () => {
    handlePageChange(1);
    setCaching(true);
    setSearchQuery("");
    setFiltreQuery("");
  };

  // Update the filter parameter and disable caching
  const handleFilter = (query) => {
    setCaching(false);
    setFiltreQuery(query);
  };

  // Update the search parameter and disable caching
  const handleSearch = (query) => {
    setCaching(false);
    setSearchQuery(query);
  };

  // render the page components
  return (
    <div className="beer-list">
      <h1>Beer List</h1>
      <Search onSearch={handleSearch} onPageChange={handlePageChange} />
      <Filter onFilter={handleFilter} onPageChange={handlePageChange} />
      <StyledButton onClick={handleReset}>Reset</StyledButton>
      <ListTable beers={data} isLoading={isLoading} />
      <Pagination
        query={searchQuery + filtreQuery}
        currentPage={currentPage}
        isLoading={isLoading}
        lastPage={lastPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BeerList;
