import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  z-index: 9;
  background-color: #acad87;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
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
