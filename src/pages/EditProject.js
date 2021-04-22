import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import { useHistory } from "react-router-dom";
import Navbar from "../components/NavBar";
import PurpleButton from "../components/PurpleButton";
import EditForm from "../components/EditForm";

const EditProject = (props) => {
  let projectId = props.match.params.id;
  const [project, setProject] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/project/${projectId}`)
      .then((response) => setProject(response.data))
      .catch((err) => console.log("Getting project failed", err));
  }, [setProject, projectId]);

  const handleEdit = (e, project) => {
    e.preventDefault();

    axios
      .patch(`${config.API_URL}/api/project/modify/${project._id}`, {
        name: project.name,
        date: project.date,
        about: project.about,
        description: project.description,
        technologies: project.technologies,
        url: project.url,
        teammates: project.teammates,
        githubRepo: project.githubRepo,
        backgroundColor: project.backgroundColor,
        image: project.image,
      })
      .then(() => history.push("/"))
      .catch((err) => err);
  };

  return (
    <>
      <Navbar />
      <form onSubmit={(e) => handleEdit(e, project)} className="form">
      <EditForm />
      <PurpleButton type="submit" addText="submit" />
      </form>
    </>
  );
};

export default EditProject;
