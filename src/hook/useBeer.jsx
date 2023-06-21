import { useState, useEffect } from "react";
import ApiHandler from "../utils/ApiHandler";

const useBeer = (id) => {
  const [beer, setBeer] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const cacheKey = `beer_${id}`;

    // get beer from sessionStorage if it exists
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) {
      setBeer(JSON.parse(cachedData));
    } else {
    // else get beers by fetching pages in sessionStorage
      // get session storage keys
      const sessionStorageKeys = Object.keys(sessionStorage);

      // create an array of keys include beers_page_
      const beersKeys = sessionStorageKeys.filter((key) =>
        key.includes("beers_page_")
      );

      // set variable to break the loop if objectif is done
      let beerFound = false;

      // iterate through beersKeys to find beer with the specific id
      for (let i = 0; i < beersKeys.length; i++) {
        // get list of beers object ( beer page )
        const beers = JSON.parse(sessionStorage.getItem(beersKeys[i]));
        
        // loop on each object and return the object that have object.id === id
        const beer = beers.find((beer) => beer.id === id);

        if (beer) {
          // If beer with the specific id found, set it and break the loop
          setBeer(beer);
          beerFound = true;
          break;
        }
      }
      // If beer not found in sessionStorage, fetch from API
      if (!beerFound) {
        fetchFromApi(id, cacheKey);
      }
    }
    setIsLoading(false);
  };

  const fetchFromApi = async (id, key) => {
    try {
      const api = new ApiHandler();
      const beerData = await api.getBeerById(id);
      setBeer(beerData);

      // save to session storage 
      sessionStorage.setItem(key, JSON.stringify(beerData));
    } catch (error) {
      console.error("Error fetching beer:", error);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return { beer, isLoading };
};

export default useBeer;
