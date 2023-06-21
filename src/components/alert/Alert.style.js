import styled from "styled-components";

export const Alert = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px;
  border-radius: 6px;
  color: ${({ $alertType }) =>
    $alertType === "error" ? "#fffffa" : "#213547"};
  background-color: ${({ $alertType }) =>
    $alertType === "error" ? "#F59786" : "#BEFAB2"};
`;
