import React, { useContext } from "react";
import { UserContext } from "../App.js";
import { Link } from "react-router-dom";

const NavBar = () => {
  const LoggedInUser = useContext(UserContext);

  return (
    <div className="navBar">
      {LoggedInUser ? (
        <Link to="/add" className="nav-element">
          <h3>Add </h3>
        </Link>
      ) : null}
      <Link to="/about" className="nav-element">
        <h3>About</h3>
      </Link>
    </div>
  );
};

export default NavBar;
