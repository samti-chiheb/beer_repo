import {styled} from 'styled-components'

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ebdcfa;
  background-color: transparent;
  color: #213547;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    outline: none;
    border-bottom: 1px solid #9376ad;
  }

  &::placeholder {
    color: #d0c1d4;
  }

  @media (max-width: 768px) {
    white-space: normal;
    word-wrap: break-word;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  margin-top: 16px;
  color: #213547;
  font-weight: 700;
`;
