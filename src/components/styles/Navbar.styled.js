import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: #acad87;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: 50px;

  a {
    text-decoration: none;
    margin: 0 32px;
    color: #fffffa;
    font-weight: 700;
    font-size: large;

    &:hover {
      color: #000000;
    }
  }
`;
