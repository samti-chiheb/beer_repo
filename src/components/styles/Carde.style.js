import { styled } from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 80%;
  padding: 16px;
  margin: 0 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    height: 300px;
  }
  p {
    margin: 6px;
  }
  span {
    margin: 0 16px;
  }
`;
