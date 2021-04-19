import React from "react";
import NavBarWhite from "../components/NavBarWhite.js";
import photoid from "../images/photoid.png"

const About = () => {
  return (
    <section className="about css-selector">
      <NavBarWhite />
      <div className="paragraph-about">
      <img src={photoid} alt="id" width="200px" height="285px"/>
      <div className="paragraph about-text">
        As a former art historian in the art market field, I have always enjoyed
        playing with databases and enigmas.
      <p>
        I came to web development by chance, when one of my clients asked me for
        advice on how to build her website. At that time, I was doing some
        Python as an amateur, so I suggested her to try with a CMS.
      </p>
      <p>It was a revelation!</p>
      <p>
        I then trained myself (thank you internet !), and completed my training
        with a web development bootcamp, Ironhack, which was one of the most
        rewarding experiences of my life.
      </p>
      <p>
        Don't hesitate to contact me if you want to talk about a project. I'm based in Paris but opened to remote.
      </p>
      </div>
      </div>
      <div className="horizontally-align about-group">
        <div className="contact-group vertically-align">
          <h4>Email</h4>
          <a
            className="email no-style-link"
            href="mailto: alexandrawestendorp@gmail.com"
          >
            alexandrawestendorp@gmail.com
          </a>
        </div>
        <div className="contact-group vertically-align">
          <h4>Linkedin</h4>
          <a
            href="https://www.linkedin.com/in/alexandra-westendorp/"
            target="_blank"
            rel="noreferrer"
            className="no-style-link vertically-align"
          >
            <img
              src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1616696566/LinkedIn-Logo.wine_b5jvv4.png"
              alt="logo-linkedin"
              className="logo"
            ></img>
          </a>
        </div>
        <div className="contact-group vertically-align">
          <h4>Github</h4>
          <a
            href="https://github.com/Alexandrawtp"
            target="_blank"
            rel="noreferrer"
            className="no-style-link"
          >
            <img
              src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1616696859/GitHub-Logo.wine_wuufz1.png"
              alt="logo-linkedin"
              className="logo"
            ></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
