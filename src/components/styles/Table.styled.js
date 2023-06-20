import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  th {
    background-color: #acad87;
    color: #fffffa;
  }

  td {
    border-bottom: 1px solid #acad87;
  }

  @media (max-width: 768px) {
    th,
    td {
      white-space: normal;
      word-wrap: break-word;
    }
  }
`;
