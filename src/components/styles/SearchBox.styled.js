import {styled } from 'styled-components'

export const StyledSearchBox = styled.input`
  width: 75%;
  padding: 8px;
  border: 1px solid #ACAD87;
  background-color: transparent;
  color: #FFFFFA;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    outline: none;
    border-color: blue;
  }

  @media (max-width: 768px) {
    white-space: normal;
    word-wrap: break-word;
  }
`;
