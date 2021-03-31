import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import PrimaryColor from "../components/PrimaryColor.js";
import SecondaryColor from "../components/SecondaryColor.js";

const ProjectDetails = (props) => {
  let projectId = props.match.params.id;
  const [project, setProject] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/project/${projectId}`)
      .then((response) => setProject(response.data))
      .catch((err) => console.log("Getting project failed", err));
  }, [setProject, projectId]);

  return (
    <div className="project-container">
      <h1>{project.name}</h1>
      <div>
        <img
          src={project.image}
          alt="screen"
          className="project-home centered-content"
        />
      </div>
      <div className="two-columns">
        <div className={SecondaryColor(project.backgroundColor, "left-column")}>
          <div className="text-box">
            <div className="paragraph">{project.about}</div>
            <div className="paragraph">{project.description}</div>
            <div>
              Go to{" "}
              <a href={project.url} target="_blank" rel="noreferrer" className="link">
                {project.url}
              </a>{" "}
              to try it out.
            </div>
            <div>
              Github :{" "}
              <a href={project.githubRepo} target="_blank" rel="noreferrer" className="link">
                {project.githubRepo}
              </a>
            </div>
          </div>
        </div>
        <div className={PrimaryColor(project.backgroundColor, "right-column")}>
          <div className="text-box">
            <div className="paragraph"><b>{project.date}</b></div>
            <div className="paragraph">Teammate : {project.teammates}</div>
            <div>{project.technologies}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
