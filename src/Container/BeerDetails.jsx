import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BeerCard from "../components/BeerCard";
import Article from "../components/Article";
import ApiHandler from "../utils/ApiHandler";
import styled from "styled-components";

const ArticleCard = styled.div`
  margin: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center
  }
`;

const BeerDetails = () => {
  const navigate = useNavigate();

  // get url params and convert it to int
  const params = useParams();
  const urlId = parseInt(params.id);

  //set variables
  const [beer, setBeer] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isBeerLoaded, setIsBeerLoaded] = useState(false);

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
        setIsBeerLoaded(true);
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
    <ArticleCard>
      <BeerCard beer={beer} />
      {Object.keys(beer).length > 0 && <Article beer={beer} />}
    </ArticleCard>
  );
};

export default BeerDetails;
