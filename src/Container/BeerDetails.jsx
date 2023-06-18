import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BeerCard from "../components/BeerCard";
import ApiHandler from "../utils/ApiHandler";
import SaveButton from "../components/common/saveButton";

const BeerDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const urlId = parseInt(params.id);

  const [beer, setBeer] = useState({});
  const [beerId, setBeerId] = useState("");
  const [beerName, setBeerName] = useState("");

  const fetchBeer = async () => {
    try {
      const api = new ApiHandler();
      const beerData = await api.getBeerById(urlId);
      setBeer(beerData);
      setBeerId(beerData.id);
      setBeerName(beerData.name);
    } catch (error) {
      console.error("Error fetching beer:", error);
    }
  };
  
  useEffect(() => {
    if (Number.isNaN(urlId)) {
      navigate("/404"); // Redirect to 404 page
      return;
    }
    fetchBeer();
  }, []);

  return (
    <div>
      <BeerCard beer={beer} />
      <SaveButton id={beerId} name={beerName} />
    </div>
  );
};

export default BeerDetails;
