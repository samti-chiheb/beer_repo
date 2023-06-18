import React, { useState } from "react";

const Filter = ({ filterParams, onFilterChange }) => {
  const [formFields, setFormFields] = useState(filterParams);

  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilterChange(formFields);
    console.log(formFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="food"
        value={formFields.food || ""}
        onChange={handleChange}
        placeholder="Food..."
      />
      <input
        type="text"
        name="brewed_before"
        value={formFields.brewed_before || ""}
        onChange={handleChange}
        placeholder="Brewed before (mm-yyyy)..."
      />
      <input
        type="number"
        name="abv_gt"
        value={formFields.abv_gt || ""}
        onChange={handleChange}
        placeholder="ABV greater than..."
      />
      <button type="submit">Apply filters</button>
    </form>
  );
};

export default Filter;
