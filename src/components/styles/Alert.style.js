import styled from "styled-components";

export const Alert = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  position: fixed;
  top: 30%;
  right: 50%;
  padding: 12px;
  border-radius: 6px;
  color: white;
  background-color: ${({ $alertType }) =>
    $alertType === "error" ? "red" : "green"};
  opacity: 0.5;
`;
