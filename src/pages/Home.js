import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App.js";
import { Link } from "react-router-dom";
import config from "../config";
import axios from "axios";
import PurpleButton from "../components/PurpleButton.js";
import MaterialUI from "../images/material-ui.png";
import Javascript from "../images/js.png";
import NodeJS from "../images/node.png";
import ReactJS from "../images/react.jpeg";
import MongoDB from "../images/mongo-db.gif";
import html5 from "../images/html-5.png";
import css3 from "../images/css-3.png";
import NavBarWhite from "../components/NavBarWhite";
import chevronR from "../images/chevron.png";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";

const Home = (props) => {
  const [projects, setProjects] = useState([]);
  const LoggedInUser = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((err) => console.log("Getting projects failed", err));
  }, [setProjects]);

  const handleDelete = (id) => {
    axios
      .delete(`${config.API_URL}/api/project/delete/${id}`)
      .then(() => {
        let filteredProjects = projects.filter((project) => {
          return project._id !== id;
        });
        setProjects(filteredProjects);
      })
      .catch((err) => {
        console.log("Delete failed", err);
      });
  };

  if (!projects) {
    return <></>;
  }

  return (
    <div>
      <div className="on-top section-1">
        <section className="css-selector">
          <NavBarWhite />
          <div className="project-header">
            <div className="title-home">
              Welcome ! My name is Alexandra, and I am a full stack web
              developer.
            </div>
            <div className="horizontally-align double-buttons">
            <a href="#projects" className="no-style-link">
              <PurpleButton addText="discover projects"></PurpleButton>
                </a>
              <Link to={"/about"} className="no-style-link white-link">
                  Contact me <img src={chevronR} alt="chevron" width="25px"/>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <section className="horizontally-align project-bloc" id="projects">
        {projects.map((project, index) => (
          <span key={index} className="home-group-project">
            {LoggedInUser ? (
              <div>
                <EditButton>
                  <Link to={`/project/edit/${project._id}`}>Edit</Link>
                </EditButton>
                <DeleteButton
                  type="submit"
                  onClick={() => {
                    handleDelete(project._id);
                  }}
                >
                </DeleteButton>
              </div>
            ) : null}
            <Link to={`/project/${project._id}`} className="no-style-link">
              {project.name === "Fabienne Fiacre" ? (
                <video controls autoPlay loop muted className="video-project home-shadow">
                  <source src={project.video} type="video/mp4"></source>
                  Your browser does not support HTML video tag
                </video>
              ) : project.name === "Fish Fighter" ? (
                <img
                  src={project.image}
                  alt="project"
                  className="home-project"
                />
              ) : (
                <img
                  src={project.image}
                  alt="project"
                  className="home-project"
                />
              )}
            </Link>
          </span>
        ))}
      </section>
      <section className="tech-section">
        <h2>TECHNOLOGIES</h2>
        <div className="technologies">
          <div className="one-tech">
            <img src={Javascript} alt="tech-logo" className="logo-tech"></img>
            <div className="tech-title">Javascript ES6</div>
          </div>
          <div className="one-tech">
            <img src={ReactJS} alt="tech-logo" className="logo-tech"></img>
            <div className="tech-title">React</div>
          </div>
          <div className="one-tech">
            <img src={NodeJS} alt="tech-logo" className="logo-tech"></img>
            <div className="tech-title">NodeJS</div>
          </div>
          <div className="one-tech">
            <img src={MongoDB} alt="tech-logo" className="logo-tech"></img>
            <div className="tech-title">MongoDB</div>
          </div>
          <div className="one-tech">
            <img src={html5} alt="tech-logo" className="logo-tech"></img>
            <div className="tech-title">HTML5</div>
          </div>
          <div className="one-tech">
            <img src={css3} alt="tech-logo" className="logo-tech"></img>
            <div className="tech-title">CSS3</div>
          </div>
          <div className="one-tech">
            <img src={MaterialUI} alt="tech-logo" className="logo-tech"></img>
            <div className="tech-title">Material UI</div>
          </div>
        </div>
      </section>
      {LoggedInUser ? (
        <button type="submit" addText="logout" onClick={props.onLogOut}>
          LOGOUT
        </button>
      ) : null}
    </div>
  );
};

export default Home;
