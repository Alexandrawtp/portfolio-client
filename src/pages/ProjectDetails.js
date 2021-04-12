import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

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
    <>
      <h1>{project.name}</h1>
      <img src={project.image} alt="screen" />
      <div>{project.about}</div>
      <div>{project.description}</div>
      <div>
        Go to{" "}
        <a href={project.url} target="_blank" rel="noreferrer" className="link">
          {project.url}
        </a>{" "}
        to try it out.
      </div>
      Github :{" "}
      <a
        href={project.githubRepo}
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        {project.githubRepo}
      </a>
      <div>{project.date}</div>
      <div>Teammate : {project.teammates}</div>
      <div>{project.technologies}</div>
    </>
  );
};

export default ProjectDetails;
