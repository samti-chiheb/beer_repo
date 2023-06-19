import React, { useState } from "react";

const FilterComponent = ({ onFilter }) => {
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

    // Convert the filter object to a query string
    const queryString = Object.entries(filters)
      .filter(([key, value]) => value !== "") // Exclude empty values
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    // Pass the query string to the parent component
    onFilter(queryString);
  };

  return (
    <div>
      <label htmlFor="brewedBefore">Brewed Before:</label>
      <input
        type="text"
        id="brewedBefore"
        value={brewedBefore}
        onChange={(e) => setBrewedBefore(e.target.value)}
      />

      <label htmlFor="food">Food:</label>
      <input
        type="text"
        id="food"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      <label htmlFor="abvGt">ABV Greater Than:</label>
      <input
        type="number"
        id="abvGt"
        value={abvGt}
        onChange={(e) => setAbvGt(e.target.value)}
      />

      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default FilterComponent;
