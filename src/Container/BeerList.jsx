import React, { useState } from "react";
import useBeers from "../hook/useBeers";
import ListTable from "../components/ListTable";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import FilterComponent from "../components/Filter";
import { useEffect } from "react";

const BeerList = () => {
  const [searchParam, setSearchParam] = useState("");
  const [filtreParam, setFiltreParam] = useState("");
  const [caching, setCaching] = useState(true);

  // Call the useBeers hook to fetch and manage beer data
  const {
    data,
    currentPage,
    lastPage,
    isLoading,
    handlePrevPage,
    handleNextPage,
    handlePageChange,
  } = useBeers(caching, filtreParam, searchParam);

  // Reset the search and filter parameters
  const handleReset = () => {
    setCaching(true);
    setSearchParam("");
    setFiltreParam("");
  };

  // Update the filter parameter and disable caching
  const handleFilter = (query) => {
    setFiltreParam(query);
    setCaching(false);
  };

  // Update the search parameter and disable caching
  const handleSearch = (query) => {
    setCaching(false);
    setSearchParam(query);
  };

  return (
    <div>
      <h1>Beer List</h1>
      <button onClick={() => sessionStorage.clear()}>Clear cache</button>
      <button onClick={handleReset}>Reset</button>
      <Search onSearch={handleSearch} />
      <FilterComponent onFilter={handleFilter} />
      <ListTable beers={data} />
      <Pagination
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
