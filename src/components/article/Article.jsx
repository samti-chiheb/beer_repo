import React from "react";
import { StyledArticle } from "./Article.style";

const Article = ({ beer }) => {
  const {
    method,
    ingredients,
    food_pairing: foodPairing,
    brewers_tips: brewersTips,
    contributed_by: contributedBy,
  } = beer;
  
  return (
    <StyledArticle>
      <h2>Method</h2>
      <p>
        Mash Temp: {method.mash_temp[0].temp.value}°C (
        {method.mash_temp[0].duration} mins)
      </p>
      <p>Fermentation Temp: {method.fermentation.temp.value}°C</p>

      <h2>Ingredients</h2>
      <ul>
        {ingredients.malt.map((malt, index) => (
          <li key={index}>
            {malt.name} - {malt.amount.value} {malt.amount.unit}
          </li>
        ))}
      </ul>
      <ul>
        {ingredients.hops.map((hop, index) => (
          <li key={index}>
            {hop.name} - {hop.amount.value} {hop.amount.unit} ({hop.add} -{" "}
            {hop.attribute})
          </li>
        ))}
      </ul>
      <p>Yeast: {ingredients.yeast}</p>

      <h2>Food Pairing</h2>
      <ul>
        {foodPairing.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>

      <h2>Brewers Tips</h2>
      <p>{brewersTips}</p>

      <p>Contributed By: {contributedBy}</p>
    </StyledArticle>
  );
};

export default Article;
