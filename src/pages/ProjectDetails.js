import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import PurpleButton from "../components/PurpleButton";
import NavBar from "../components/NavBar.js";

const ProjectDetails = (props) => {
  let projectId = props.match.params.id;
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/project/${projectId}`)
      .then((response) => setProject(response.data))
      .catch((err) => console.log("Getting project failed", err));
  }, [setProject, projectId]);

  if (!project) {
    return <></>;
  }

  return (
    <>
    <NavBar />
      <div className="project-header">
        <h1>{project.name}</h1>
      <h2 className="paragraph">{project.date}</h2>
      <div className="paragraph">
        <b>Teammate :</b> {project.teammates} | {project.technologies}
      </div>
      <div className="paragraph">{project.about}</div>
      <div className="paragraph">{project.description}</div>
      <div className="horizontally-align double-buttons">
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="no-style-link"
        >
          <PurpleButton
            addText="discover"
            className="no-style-link"
          ></PurpleButton>
        </a>
        <a
          href={project.githubRepo}
          target="_blank"
          rel="noreferrer"
          className="no-style-link link"
        >
          Github
        </a>
      </div>
      </div>
      <div className="horizontally-align project-bloc">
        <video controls autoPlay loop muted className="video-project">
          <source src={project.video} type="video/mp4"></source>
          Your browser does not support HTML video tag
        </video>
        <img src={project.image} alt="screen" className="home-img" />
        <img src={project.horizontal} alt="screen" className="horizontal-img" />
        <img src={project.tablette} alt="screen" className="tablette-img" />
      </div>
    </>
  );
};

export default ProjectDetails;
