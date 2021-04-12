import React from "react";

const About = () => {
  return (
    <section>
      <h3>Contact</h3>
      <p>Email: alexandrawestendorp@gmail.com</p>
      <a
        href="https://www.linkedin.com/in/alexandra-westendorp/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1616696566/LinkedIn-Logo.wine_b5jvv4.png"
          alt="logo-linkedin"
          className="logo"
        ></img>
      </a>
      <a
        href="https://github.com/Alexandrawtp"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1616696859/GitHub-Logo.wine_wuufz1.png"
          alt="logo-linkedin"
          className="logo"
        ></img>
      </a>
      <h3>Technologies</h3>
      <img
        src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1616696365/Capture_d_e%CC%81cran_2021-03-25_a%CC%80_19.16.54_kn5f6g.png"
        alt="graph"
        width="200px"
      ></img>
    </section>
  );
};

export default About;
