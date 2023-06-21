import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #9376ad;
  color: #fffffa;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  box-sizing: border-box;
  margin: 6px 0;

  &:hover {
    opacity: 0.8;
    outline: 1px solid #acad87;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #ebdcfa;
    color: #acad87;
    cursor: not-allowed;
  }
`;

export default StyledButton;