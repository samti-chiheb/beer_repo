import { useState, useEffect } from "react";
import ApiHandler from "../utils/ApiHandler";

const useBeer = (id) => {
  const [beer, setBeer] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const cacheKey = `beer_${id}`;
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) {
      setBeer(JSON.parse(cachedData));
      
    } else {
      try {
        const api = new ApiHandler();
        const beerData = await api.getBeerById(id);
        setBeer(beerData);
        sessionStorage.setItem(cacheKey, JSON.stringify(beerData));
      } catch (error) {
        console.error("Error fetching beer:", error);
      }
    }
    setIsLoading(false);
  };
  
  useEffect(() => {
    fetchData();
  }, [id]);

  return { beer, isLoading };
};

export default useBeer;