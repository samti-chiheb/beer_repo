import useApiHandler from "./useApiHandler";

const useBeerList = () => {
  const {
    data,
    currentPage,
    lastPage,
    isLoading,
    handlePrevPage,
    handleNextPage,
    handlePageChange,
  } = useApiHandler(true);

  return {
    data,
    currentPage,
    lastPage,
    isLoading,
    handlePrevPage,
    handleNextPage,
    handlePageChange,
  };
};

export default useBeerList;