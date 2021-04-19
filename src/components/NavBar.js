import React, { useContext } from "react";
import { UserContext } from "../App.js";
import { Link } from "react-router-dom";
import LogoBlack from "../images/logo-black.png";

const NavBar = () => {
  const LoggedInUser = useContext(UserContext);

  return (
    <div className="navBarBlack">
      <Link to="/">
        <img src={LogoBlack} alt="logo" className="logo-portfolio" />
      </Link>
      <div className="nav-list">
        {LoggedInUser ? (
          <Link to="/add" className="black-nav-element">
            <h3>Add </h3>
          </Link>
        ) : null}
        <Link to="/about" className="black-nav-element">
          <h3>About</h3>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
