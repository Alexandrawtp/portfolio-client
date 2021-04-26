import React from "react";
import NavBar from "../components/NavBar";
import Presentation from "../components/Presentation";
import Contact from "../components/Contact";
import Doughnut from "../components/TechDonut";

const About = () => {
  return (
    <>
      <NavBar />
      <Presentation />
      <div className="horizontally-align">
        <Doughnut />
        <Contact />
      </div>
    </>
  );
};

export default About;
