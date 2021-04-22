import React from "react";
import Typography from "@material-ui/core/Typography";

const Technologies = () => (
  <section className="tech-section">
    <Typography variant="h6" gutterBottom>
      Technologies
    </Typography>
    <div className="technologies">
      <div className="technology">
        <img
          src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1619086218/Technologies/js.png"
          alt="js-logo"
          className="logo-tech"
        />
        <h3>Javascript ES6</h3>
      </div>
      <div className="technology">
        <img
          src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1619086218/Technologies/react.jpg"
          alt="react-logo"
          className="logo-tech"
        />
        <h3>React</h3>
      </div>
      <div className="technology">
        <img
          src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1619086218/Technologies/node.png"
          alt="node-logo"
          className="logo-tech"
        />
        <h3>NodeJS</h3>
      </div>
      <div className="technology">
        <img
          src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1619086218/Technologies/mongo-db.gif"
          alt="mongo-db-logo"
          className="logo-tech"
        />
        <h3>MongoDB</h3>
      </div>
      <div className="technology">
        <img
          src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1619086218/Technologies/html-5.png"
          alt="html5-logo"
          className="logo-tech"
        />
        <h3>HTML5</h3>
      </div>
      <div className="technology">
        <img
          src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1619086218/Technologies/css-3.png"
          alt="css3-logo"
          className="logo-tech"
        />
        <h3>CSS3</h3>
      </div>
      <div className="technology">
        <img
          src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1619086218/Technologies/material-ui.png"
          alt="material-ui-logo"
          className="logo-tech"
        />
        <h3>Material UI</h3>
      </div>
    </div>
  </section>
);

export default Technologies;
