import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BeerCard from "../components/BeerCard";
import ApiHandler from "../utils/ApiHandler";
import SaveButton from "../components/common/saveButton";

const BeerDetails = () => {
  const navigate = useNavigate();

  // get url params and convert it to int
  const params = useParams();
  const urlId = parseInt(params.id);

  //set variables
  const [beer, setBeer] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // fetch data
  const fetchData = async () => {
    setIsLoading(true);

    const cacheKey = `beer_${urlId}`;
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) {
      //set fetched data
      setBeer(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      // if data do not exist in session storage fetch from API
      try {
        const api = new ApiHandler();
        const beerData = await api.getBeerById(urlId);
        setBeer(beerData);

        //save data to local storage
        sessionStorage.setItem(cacheKey, JSON.stringify(beerData));
      } catch (error) {
        console.error("Error fetching beer:", error);
      }
    }
  };

  useEffect(() => {
    // navigate to error page is url is not supported 
    if (Number.isNaN(urlId)) {
      navigate("/404");
      return;
    }

    // fetch data
    fetchData();
  }, []);

  return (
    // render component
    <div>
      <BeerCard beer={beer} />
      <SaveButton id={beer.id} name={beer.name} />
    </div>
  );
};

export default BeerDetails;
