import React, { useContext } from "react";
import { UserContext } from "../App.js";
import { Link } from "react-router-dom";
import LogoWhite from "../images/logo-white.png";

const NavBarWhite = () => {
  const LoggedInUser = useContext(UserContext);

  return (
    <div className="navBar">
      <Link to="/">
        <img src={LogoWhite} alt="logo" className="logo-portfolio" />
      </Link>
      <div className="nav-list">
        {LoggedInUser ? (
          <Link to="/add" className="nav-element">
            <h3>Add </h3>
          </Link>
        ) : null}
        <Link to="/about" className="nav-element">
          <h3>About</h3>
        </Link>
      </div>
    </div>
  );
};

export default NavBarWhite;
