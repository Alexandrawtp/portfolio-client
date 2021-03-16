import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div>
    <Link to="/about">
      <h3>About me</h3>
    </Link>
  </div>
);

export default NavBar;
