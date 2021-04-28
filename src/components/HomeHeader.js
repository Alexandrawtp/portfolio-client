import React from "react";
import BlueButton from "./BlueButton";
import NavBarWhite from "./NavBarWhite";
import { Link } from "react-router-dom";
import ProfilePicture from "./ProfilePic";

const HomeHeader = () => (
  <section className="section-1 css-selector ">
    <NavBarWhite />
    <div className="project-content horizontally-align">
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
      <div>
        <ProfilePicture />
      </div>
    </div>
  </section>
);

export default HomeHeader;
