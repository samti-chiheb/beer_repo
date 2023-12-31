import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledTable } from "./Table.style"
import {TableLoader} from "../../components";

const ListTable = ({ beers, isLoading }) => {
  const navigate = useNavigate();

  // navigate to a specefic item
  const handleClick = (id) => {
    navigate(`/beer/${id}`);
  };

  // rendre data
  return (
    <>
      {isLoading ? (
        <TableLoader />
      ) : (
        <StyledTable>
          <thead>
            <tr>
              <th>N°</th>
              <th>Name</th>
              <th>First brewed</th>
              <th>ABV</th>
            </tr>
          </thead>
          <tbody>
            {/* map data to get needed info */}
            {beers.map((beer) => (
              <tr key={beer.id} onClick={() => handleClick(beer.id)}>
                <td>{beer.id} </td>
                <td>{beer.name}</td>
                <td>{beer.first_brewed}</td>
                <td>{beer.abv}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
    </>
  );
};

export default ListTable;
