import { useState } from "react";
import useApiHandler from "./useApiHandler";

const useBeerSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const queryParam = `beer_name=${searchTerm.replace(/\s/g, "_")}`;

  const {
    data,
    currentPage,
    lastPage,
    isLoading,
    handlePrevPage,
    handleNextPage,
    handlePageChange,
  } = useApiHandler(false, queryParam);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return {
    handleSearch,
    searchTerm,
    data,
    currentPage,
    isLoading,
    lastPage,
    handlePrevPage,
    handleNextPage,
    handlePageChange,
  };
};

export default useBeerSearch;
