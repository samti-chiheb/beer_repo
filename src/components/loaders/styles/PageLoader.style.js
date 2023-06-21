import styled, { keyframes } from "styled-components";

// Define a spinning animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledPageLoader = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    border-radius: 50%;
    border-top: 8px solid #9376ad;
    width: 80px;
    height: 80px;
    animation: ${spin} 2s linear infinite;
  }

  span {
    font-size: 24px;
    margin-top: 16px;
  }
`;
