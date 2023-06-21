import {styled } from 'styled-components'

const StyledSearchBox = styled.input`
  margin-right: 6px;
  width: 75%;
  padding: 8px;
  border: 2px solid #ebdcfa;
  background-color: transparent;
  color: #213547;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    outline: none;
    border-color: #9376ad;
  }

  &::placeholder {
    color: #d0c1d4;
  }

  @media (max-width: 768px) {
    white-space: normal;
    word-wrap: break-word;
  }
`;

export default StyledSearchBox ;