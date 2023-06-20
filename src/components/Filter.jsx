import React, { useState } from "react";
import { StyledInput, StyledLabel } from "./styles/Input.styled";
import { StyledButton } from "./styles/Button.style";


const FilterComponent = ({ onFilter, onPageChange }) => {
  const [brewedBefore, setBrewedBefore] = useState("");
  const [food, setFood] = useState("");
  const [abvGt, setAbvGt] = useState("");

  const handleFilter = () => {
    // Create an object with the filter parameters based on user input
    const filters = {
      brewed_before: brewedBefore,
      food: food,
      abv_gt: abvGt,
    };

    // Convert the filter object to a query string "key&value" pair
    const queryString = Object.entries(filters)
      .filter(([key, value]) => value !== "") 
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    // Pass the query string to the parent component
    onFilter(queryString);

    //set current page to one
    onPageChange(1);
  };

  //rendre filtre component
  return (
    <div>
      <StyledLabel htmlFor="abvGt">Brewed before : </StyledLabel>
      <StyledInput
        placeholder="mm-yyyy"
        type="text"
        id="brewedBefore"
        value={brewedBefore}
        onChange={(e) => setBrewedBefore(e.target.value)}
      />
      <StyledLabel htmlFor="abvGt">Greater than : </StyledLabel>
      <StyledInput
        id="abvGt"
        type="number"
        min="0"
        max="100"
        placeholder="0 - 100"
        value={abvGt}
        onChange={(e) => setAbvGt(e.target.value)}
      />
      <StyledLabel htmlFor="food">food pairing : </StyledLabel>
      <StyledInput
        type="text"
        id="food"
        placeholder="food"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <StyledButton onClick={handleFilter}>Apply Filter</StyledButton>
    </div>
  );
};

export default FilterComponent;
