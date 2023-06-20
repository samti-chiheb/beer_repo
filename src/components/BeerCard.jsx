import React from "react";

const BeerCard = ({ beer }) => {
  // Destructure the properties from the beer object
  const { name, tagline, description, abv, ibu, image_url: imageUrl } = beer;

  return (
    <div className="beer-card">
      <h2>BeerDetails</h2>
      <img src={imageUrl} alt={name} className="beer-image" />
      <div className="beer-info">
        <h2 className="beer-name">{name}</h2>
        <p className="beer-tagline">{tagline}</p>
        <p className="beer-description">{description}</p>
        <div className="beer-details">
          <p className="beer-abv">ABV: {abv}%</p>
          <p className="beer-ibu">IBU: {ibu}</p>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
