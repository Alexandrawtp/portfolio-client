import React from "react";
import MaterialUI from "../images/material-ui.png";
import Javascript from "../images/js.png";
import NodeJS from "../images/node.png";
import ReactJS from "../images/react.jpeg";
import MongoDB from "../images/mongo-db.gif";
import html5 from "../images/html-5.png";
import css3 from "../images/css-3.png";

const Technologies = () => (
  <section className="tech-section">
  <h2>TECHNOLOGIES</h2>
  <div className="technologies">
    <div className="one-tech">
      <img src={Javascript} alt="tech-logo" className="logo-tech"></img>
      <div className="tech-title">Javascript ES6</div>
    </div>
    <div className="one-tech">
      <img src={ReactJS} alt="tech-logo" className="logo-tech"></img>
      <div className="tech-title">React</div>
    </div>
    <div className="one-tech">
      <img src={NodeJS} alt="tech-logo" className="logo-tech"></img>
      <div className="tech-title">NodeJS</div>
    </div>
    <div className="one-tech">
      <img src={MongoDB} alt="tech-logo" className="logo-tech"></img>
      <div className="tech-title">MongoDB</div>
    </div>
    <div className="one-tech">
      <img src={html5} alt="tech-logo" className="logo-tech"></img>
      <div className="tech-title">HTML5</div>
    </div>
    <div className="one-tech">
      <img src={css3} alt="tech-logo" className="logo-tech"></img>
      <div className="tech-title">CSS3</div>
    </div>
    <div className="one-tech">
      <img src={MaterialUI} alt="tech-logo" className="logo-tech"></img>
      <div className="tech-title">Material UI</div>
    </div>
  </div>
</section>
)

export default Technologies;