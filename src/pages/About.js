import React from "react";
import ReactTypingEffect from "react-typing-effect";

const About = () => {
  return (
    <div>
      <ReactTypingEffect
        text={["Hi, I'm Alexandra !"]}
        cursor="_"
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        speed={100}
        typingDelay={1000}
        eraseDelay={100000}
        className="centered-content"
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return <span key={key}>{char}</span>;
              })}
            </h1>
          );
        }}
      />
      <section className="projects-group">
        <div className="color-1 home-box">
          <h3>Contact</h3>
          <p>Email: alexandrawestendorp@gmail.com</p>
          <p>Phone: +33669029544</p>
        </div>
        <div className="color-2 home-box">
          <a
            href="https://www.linkedin.com/in/alexandra-westendorp/"
            target="_blank"
            rel="noreferrer"
            className="no-style-link"
          >
            <img
              src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1616696566/LinkedIn-Logo.wine_b5jvv4.png"
              alt="logo-linkedin"
              className="logo"
            ></img>
          </a>
        </div>
        <div className="color-3 home-box">
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
        <div className="color-4 home-box">
          <h3>Technologies</h3>
          <img
            src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1616696365/Capture_d_e%CC%81cran_2021-03-25_a%CC%80_19.16.54_kn5f6g.png"
            alt="graph" width="200px"
          ></img>
          {/* <ul>
            <li>Javascript</li>
            <li>ReactJs</li>
            <li>NodeJs</li>
            <li>MongoDB</li>
            <li>ExpressJs</li>
            <li>JQuery</li>
            <li>Markdown</li>
            <li>Git</li>
            <li>Github</li>
          </ul> */}
        </div>
      </section>
    </div>
  );
};

export default About;
