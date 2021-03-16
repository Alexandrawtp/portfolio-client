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

  return <div>
  <h2>{project.name}</h2>
  <div>{project.about}</div>
  <div>{project.description}</div>
  <div>Go to <a href={project.url} target="_blank" rel="noreferrer">{project.url}</a> to try it out</div>
  <div>Github : <a href={project.githubRepo} target="_blank" rel="noreferrer">{project.githubRepo}</a></div>
  <div>{project.date}</div>
  <div>{project.teammate}</div>
  <div>{project.technologies}</div>
  </div>;
};

export default ProjectDetails;
