import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "./styles/Navbar.styled.js";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">Beers List</Link>
      <Link to="/beer/1">One Beer</Link>
    </StyledNavbar>
  );
};

export default Navbar;
