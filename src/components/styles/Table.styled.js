import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  max-width: 500px;
  margin: 16px auto;
  border-collapse: collapse;
  
  th,
  td {
    padding: 8px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  
  th {
    background-color: #acad87;
    color: #fffffa;
  }
  
  td {
    border-bottom: 1px solid #acad87;
  }
  tbody tr {
    position: relative;
    &:hover {
      background-color: #E3E1BC;
    }
  }

  @media (max-width: 768px) {
    th,
    td {
      white-space: normal;
      word-wrap: break-word;
    }
  }
`;
