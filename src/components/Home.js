import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import config from "../config";
import axios from "axios";

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
      <h1>Welcome to my Portfolio</h1>
      <section className="projects-group">
      {projects.map((project, index) => (
          <div key={index} className="boxes">
            <Link to={`/project/${project._id}`} className="no-style-link text-boxes">
              <h3>{project.name}</h3>
            </Link>
          </div>
      ))}
      </section>
    </div>
  );
};

export default Home;