import { useState, useEffect } from "react";
import ApiHandler from "../utils/ApiHandler";

const useBeerList = (initialPage = 1) => {
  const [beers, setBeers] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(initialPage);

  useEffect(() => {
    fetchBeers(currentPage);
  }, [currentPage]);

  const fetchBeers = async (page) => {
    setIsLoading(true);

    // Check if the data is already in the session storage
    const cacheKey = `beers_${page}`;
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) {
      setBeers(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      // Fetch the data from the API
      try {
        const apiHandler = new ApiHandler();
        const data = await apiHandler.getBeers(page);
        setBeers(data);

        // Save the data to the session storage
        sessionStorage.setItem(cacheKey, JSON.stringify(data));

        // Check if there is data for the next page
        const nextPageData = await apiHandler.getBeers(page + 1);

        // update max pages
        if (nextPageData.length > 0) {
          sessionStorage.setItem("max_beer_pages", JSON.stringify(page + 1));
        } else {
          sessionStorage.setItem("max_beer_pages", JSON.stringify(page));
        }
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    }

    // set last page
    setLastPage(sessionStorage.getItem("max_beer_pages"));

    setIsLoading(false);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return {
    beers,
    currentPage,
    lastPage,
    isLoading,
    handlePrevPage,
    handleNextPage,
    handlePageChange,
  };
};

export default useBeerList;
