import { styled } from "styled-components";

export const StyledSelect = styled.select`
  padding: 8px;
  margin: 0 8px;
  border: none;
  background-color: #fffffa;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;

  &:focus {
    outline: none;
    border-bottom: 1px solid #9376ad;
  }

  option {
    background-color: #fffffa;
  }

  @media (max-width: 768px) {
    white-space: normal;
    word-wrap: break-word;
  }
`;
