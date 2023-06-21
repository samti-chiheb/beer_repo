import { useState, useEffect } from "react";
import ApiHandler from "../utils/ApiHandler";

const useBeer = (isCaching = true, filtreQuery = "", searchQuery = "") => {
  // set state for variables 
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(null);

  // set query by concatenating filters and searching
  let query;
  filtreQuery ? (query = "&" + filtreQuery) : (query = "");
  searchQuery ? (query += "&" + "beer_name="+searchQuery) : "";
  
  // execute fetchData on each changement of the dependancy array [current page , query]
  useEffect(() => {
    fetchData(currentPage, query);
  }, [currentPage, query, filtreQuery, searchQuery]);
  
  // fetch data
  const fetchData = async (page, query) => {
    setIsLoading(true);

    // set caching params
    const lastPageKey = isCaching ? "last_page" : "last_query_page";
    const cacheKey = `beers_page_${page}_${query}`;

    // fetch cached data from session storage
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) {
      //set fetched data
      setData(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      // if data do not exist in session storage fetch from API
      try {
        const apiHandler = new ApiHandler();
        const itemsPerPage = apiHandler.getItemsPerPage();
        const fetchedData = await apiHandler.getBeers(page, query);

        // set the fetched data
        setData(fetchedData);

        // set data data to session storage if it should be cached
        if (isCaching) {
          sessionStorage.setItem(cacheKey, JSON.stringify(fetchedData));
        }

        // if you have access to the api response length ignore disable the next condition

        // set last page to local storage to determine the last page
        if (fetchedData.length === itemsPerPage) {
          sessionStorage.setItem(lastPageKey, JSON.stringify(page + 1));
        } else {
          sessionStorage.setItem(lastPageKey, JSON.stringify(page));
        }

        // handle error
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    }

    // set Last page - replace sessionStorage.getItem(lastPageKey) by the api last page 
    setLastPage(sessionStorage.getItem(lastPageKey));
    setIsLoading(false);
  };

  //passing changing pages
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // return hook object
  return {
    data,
    currentPage,
    lastPage,
    isLoading,
    filtreQuery,
    searchQuery,
    handlePageChange,
  };
};

export default useBeer;