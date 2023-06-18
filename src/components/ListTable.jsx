import React from "react";

const ListTable = ({ beers, onClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Tagline</th>
        </tr>
      </thead>
      <tbody>
        {beers.map((beer) => (
          <tr key={beer.id}>
            <td onClick={() => onClick(beer.id)}>{beer.id} </td>
            <td>{beer.name}</td>
            <td>{beer.tagline}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListTable;
