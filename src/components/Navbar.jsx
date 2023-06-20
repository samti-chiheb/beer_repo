import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "./styles/Navbar.styled.js";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/beer/1">Beer</Link>
    </StyledNavbar>
  );
};

export default Navbar;
