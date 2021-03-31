import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import config from "../config";
import axios from "axios";
import ReactTypingEffect from 'react-typing-effect';
import LightingColors from "../components/LightingColors.js";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((err) => console.log("Getting projects failed", err));
  }, [setProjects]);

  return (
    <div>
     <ReactTypingEffect
        text={["Welcome to my portfolio"]}
        cursor="_"
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        speed={80}
        typingDelay={100}
        eraseDelay={100000}
        className="centered-content"
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
      <section className="projects-group">
        {projects.map((project, index) => (
          <div key={index} className={LightingColors(project.backgroundColor, "home-box")}>
            <Link
              to={`/project/${project._id}`}
              className="no-style-link text-boxes"
            >
              <h3>{project.name}</h3>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
