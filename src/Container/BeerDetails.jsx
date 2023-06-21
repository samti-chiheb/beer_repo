import react, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useBeer from "../hook/useBeer";
import { Article, PageLoader, BeerCard } from "../components";

const BeerDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const urlId = parseInt(id);

  const { beer, isLoading } = useBeer(urlId);

  useEffect(() => {
    if (Number.isNaN(urlId)) navigate("/404");
  }, [urlId, navigate]);

  return (
    <div className="one-beer-page">
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <BeerCard beer={beer} />
          {Object.keys(beer).length > 0 && <Article beer={beer} />}
        </>
      )}
    </div>
  );
};

export default BeerDetails;
