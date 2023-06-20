import React from "react";
import { useNavigate } from "react-router-dom";

const ListTable = ({ beers }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    // Modify this line to use the correct URL for your application.
    navigate(`/beer/${id}`);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>N°</th>
          <th>Name</th>
          <th>First brewed</th>
          <th>ABV</th>
        </tr>
      </thead>
      <tbody>
        {beers.map((beer) => (
          <tr key={beer.id} onClick={() => handleClick(beer.id)}>
            <td>{beer.id} </td>
            <td>{beer.name}</td>
            <td>{beer.first_brewed}</td>
            <td>{beer.abv}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListTable;
