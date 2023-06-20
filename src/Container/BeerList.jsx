import React, { useState } from "react";
import useBeers from "../hook/useBeers";
import ListTable from "../components/ListTable";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import FilterComponent from "../components/Filter";

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
    handlePrevPage,
    handleNextPage,
    handlePageChange,
  } = useBeers(caching, filtreQuery, searchQuery);

  // Reset the search and filter parameters
  const handleReset = () => {
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
    <div>
      <h1>Beer List</h1>
      <button onClick={handleReset}>Reset</button>
      <Search 
        onSearch={handleSearch} 
        onPageChange={handlePageChange} 
      />
      <FilterComponent
        onFilter={handleFilter}
        onPageChange={handlePageChange}
      />
      <ListTable beers={data} />
      <Pagination
        query={searchQuery + filtreQuery}
        currentPage={currentPage}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        isLoading={isLoading}
        lastPage={lastPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BeerList;
