import React from "react";
import styled from "styled-components";
import SaveButton from "./common/saveButton";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;

  img {
    height: 300px;
  }
  p{
    margin: 6px;
  }
  span{
    margin: 0 16px;
  }
`;

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
