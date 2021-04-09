import React, { useContext } from "react";
import { UserContext } from "../App.js";
import { Link } from "react-router-dom";

const NavBar = () => {
  const LoggedInUser = useContext(UserContext);

  return (
    <div className="navBar">
      {LoggedInUser ? (
        <Link to="/add" className="no-style-link nav-link">
          <h3>Add </h3>
        </Link>
      ) : null}
      <Link to="/" className="no-style-link nav-link">
        <h3>Projects</h3>
      </Link>
      <Link to="/about" className="no-style-link">
        <h3>About</h3>
      </Link>
    </div>
  );
};

export default NavBar;
