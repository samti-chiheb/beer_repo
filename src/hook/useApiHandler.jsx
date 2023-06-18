import { useState, useEffect } from "react";
import ApiHandler from "../utils/ApiHandler";

const useApiHandler = (isCaching = false, queryParams = "") => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(null);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, queryParams]);

  // fetch data
  const fetchData = async (page) => {
    setIsLoading(true);

    // setting last page variables
    const lastPageKey = isCaching ? "last_page" : "last_query_page";
    const cacheKey = `beers_${page}`;

    // checking if the data should be cached
    const cachedData = sessionStorage.getItem(cacheKey);

    // Check if the data is already in the session storage
    if (cachedData) {
      // fetch data from session storage
      setData(JSON.parse(cachedData));
      setIsLoading(false);

      // fetch data from API
    } else {
      try {
        const apiHandler = new ApiHandler();
        const fetchedData = await apiHandler.getBeers(page, queryParams);
        setData(fetchedData);

        // Save the data to the session storage
        if(isCaching){
          sessionStorage.setItem(cacheKey, JSON.stringify(fetchedData));
        } 
        // Check if there is data for the next page
        const nextPageData = await apiHandler.getBeers(page + 1);

        // update last page
        if (nextPageData.length > 0) {
          sessionStorage.setItem(lastPageKey, JSON.stringify(page + 1));
        } else {
          sessionStorage.setItem(lastPageKey, JSON.stringify(page));
        }
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    }
    setLastPage(sessionStorage.getItem(lastPageKey));
    setIsLoading(false);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < lastPage) setCurrentPage(currentPage + 1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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

export default useApiHandler;
