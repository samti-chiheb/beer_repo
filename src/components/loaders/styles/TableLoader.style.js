import styled from "styled-components";

export const StyledTableLoader = styled.table`
  width: 100%;

  tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    td {
      height: 50px;
      vertical-align: middle;
      padding: 8px;
      span {
        display: block;
      }

      &.td-1 {
        width: 20px;
        span {
          width: 20px;
          height: 20px;
        }
      }

      &.td-2 {
        width: 200px;
        span {
          height: 12px;
          background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
          background-size: 500px 100px;
          animation-name: moving-gradient;
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
      }

      &.td-3 {
        width: 200px;
        span {
          height: 12px;
          background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
          background-size: 500px 100px;
          animation-name: moving-gradient;
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
      }

      &.td-4 {
        width: 100px;
        span {
          background-color: rgba(0, 0, 0, 0.15);
          width: 100%;
          height: 30px;
        }
      }
    }
  }

  @keyframes moving-gradient {
    0% {
      background-position: -250px 0;
    }
    100% {
      background-position: 250px 0;
    }
  }
`;
