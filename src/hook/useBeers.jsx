import { useState, useEffect } from "react";
import ApiHandler from "../utils/ApiHandler";

const useBeer = (isCaching = true, filtreQuery = "", searchQuery = "") => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(null);

  let query;
  filtreQuery ? (query = "&" + filtreQuery) : (query = "");
  searchQuery ? (query += "&" + "beer_name="+searchQuery) : "";
  
  useEffect(() => {
    fetchData(currentPage, query);
  }, [currentPage, query]);

  const fetchData = async (page, query) => {
    setIsLoading(true);
    const lastPageKey = isCaching ? "last_page" : "last_query_page";
    const cacheKey = `beers_${page}_${query}`;
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) {
      setData(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      try {
        console.log(query);
        const apiHandler = new ApiHandler();
        const fetchedData = await apiHandler.getBeers(page, query);
        setData(fetchedData);

        if (isCaching) {
          sessionStorage.setItem(cacheKey, JSON.stringify(fetchedData));
        }

        // if you have access to the api response length  
          
        
        // you can update this with the actual api.response.length else use this to count api response length
        if (fetchedData.length === 20) {
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
    filtreQuery,
    searchQuery,
    handlePrevPage,
    handleNextPage,
    handlePageChange,
  };
};

export default useBeer;