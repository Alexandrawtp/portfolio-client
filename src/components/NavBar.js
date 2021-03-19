import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="navBar">
    <Link to="/about" className="no-style-link">
      <h3>About</h3>
    </Link>
  </div>
);

export default NavBar;
