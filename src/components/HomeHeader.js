import React from "react";
import BlueButton from "../components/BlueButton.js";
import NavBarWhite from "../components/NavBarWhite";
import { Link } from "react-router-dom";

const HomeHeader = () => (
  <div className="section-1 css-selector">
    <section className="css-selector">
      <NavBarWhite />
      <div className="project-header">
        <div className="title-home">
          Welcome ! My name is Alexandra, and I am a full stack web developer.
        </div>
        <div className="horizontally-align double-buttons">
          <a href="#technologies" className="no-style-link">
            <BlueButton addText="technologies"></BlueButton>
          </a>
          <Link to={"/about"} className="no-style-link white-link">
            Contact me{" "}
            <img
              src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1619110383/icons/chevron-right.png"
              alt="chevron"
              width="25px"
            />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default HomeHeader;
