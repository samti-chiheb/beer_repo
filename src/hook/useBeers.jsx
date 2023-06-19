import { useState, useEffect } from "react";
import ApiHandler from "../utils/ApiHandler";

const useBeer = (isCaching = true, filtreQuery = "", searchQuery = "") => {
  //set use states
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(null);

  // set the query string
  let query;
  filtreQuery ? (query = "&" + filtreQuery) : "&";
  searchQuery ? (query += "&" + searchQuery) : "";

  // fetch data
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, filtreQuery, searchQuery, query]);

  // fetch data function
  const fetchData = async (page) => {
    setIsLoading(true);
    // config session storage variables
    const lastPageKey = isCaching ? "last_page" : "last_query_page";
    const cacheKey = `beers_${page}`;
    const cachedData = sessionStorage.getItem(cacheKey);

    // fetch data from session storage
    if (cachedData) {
      setData(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      // fetch data from ApiHandler
      try {
        const apiHandler = new ApiHandler();
        const fetchedData = await apiHandler.getBeers(page, query);
        console.log(page);
        setData(fetchedData);

        // set data to session storage
        if (isCaching) {
          sessionStorage.setItem(cacheKey, JSON.stringify(fetchedData));
        }

        // store last page to local storage
        if (fetchedData.length == 20) {
          sessionStorage.setItem(lastPageKey, JSON.stringify(page + 1));
        }
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    }

    //set last page
    setLastPage(sessionStorage.getItem(lastPageKey));
    setIsLoading(false);
  };

  // handle pagination actions

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < lastPage) setCurrentPage(currentPage + 1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //return props
  return {
    data,
    currentPage,
    lastPage,
    isLoading,
    filtreQuery,
    searchQuery,
    handlePrevPage,
    handleNextPage,
    handlePageChange,
  };
};

export default useBeer;
