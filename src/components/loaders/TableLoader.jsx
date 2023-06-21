import React from "react";
import { StyledTableLoader } from "./styles/TableLoader.style";

const TableLoader = () => {
  const rows = new Array(20).fill(null); // Your table shows 20 rows each time
  return (
    <StyledTableLoader>
      <tbody>
        {rows.map((_, i) => (
          <tr key={i}>
            <td className="td-1">
              <span />
            </td>
            <td className="td-2">
              <span />
            </td>
            <td className="td-3">
              <span />
            </td>
            <td className="td-4">
              <span />
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTableLoader>
  );
};

export default TableLoader;
