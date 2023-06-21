import React from "react";
import SaveButton from "./common/saveButton";
import { Card } from "./styles/Carde.style";


const BeerCard = ({ beer }) => {
  // Destructure the properties from the beer object
  const {
    name,
    tagline,
    first_brewed,
    description,
    image_url: imageUrl,
    abv,
    ibu,
  } = beer;

  return (
    <Card>
      <img src={imageUrl} alt={name} className="beer-image" />
      <div>
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <p>First Brewed: {first_brewed}</p>
        <p>{description}</p>
        <div>
          <span>ABV: {abv}%</span>
          <span>IBU: {ibu}</span>
        </div>
      </div>
      <SaveButton id={beer.id} name={beer.name} />
    </Card>
  );
};

export default BeerCard;
