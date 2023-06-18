import { useState } from "react";
import useApiHandler from "./useApiHandler";

const useBeerFilter = () => {
  const [filterParams, setFilterParams] = useState({});
  const queryParam = Object.entries(filterParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const {
    data,
    currentPage,
    lastPage,
    isLoading,
    handlePrevPage,
    handleNextPage,
    handlePageChange,
  } = useApiHandler(false, queryParam);

  const handleFilterChange = (newFilterParams) => {
    setFilterParams(newFilterParams);
  };

  return {
    filterParams,
    handleFilterChange,
    data,
    currentPage,
    lastPage,
    isLoading,
    handlePrevPage,
    handleNextPage,
    handlePageChange,
  };
};

export default useBeerFilter;
