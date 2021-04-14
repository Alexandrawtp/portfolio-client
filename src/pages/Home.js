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
import ThemeColor from "../components/ThemeColor.js";

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

  return (
    <div>
      <section className="gradient-background"></section>
      <div className="on-top section-1">
        <div className="side">
          <h1>Welcome to my portfolio</h1>
          <p className="grey-text">My name is Alexandra, and I am a full-stack web developer.</p>
          <div className="horizontally-align double-buttons">
            <Link to={"/projects"} className="no-style-link">
              <PurpleButton addText="projects"></PurpleButton>
            </Link>
            <Link to={"/about"} className="no-style-link link">
              Contact me
            </Link>
          </div>
        </div>
        <div className="technologies">
            <img src={Javascript} alt="tech-logo" className="logo-tech"></img>
            <img src={ReactJS} alt="tech-logo" className="logo-tech"></img>
            <img src={NodeJS} alt="tech-logo" className="logo-tech"></img>
            <img src={MongoDB} alt="tech-logo" className="logo-tech"></img>
            <img src={html5} alt="tech-logo" className="logo-tech"></img>
            <img src={css3} alt="tech-logo" className="logo-tech"></img>
            <img src={MaterialUI} alt="tech-logo" className="logo-tech"></img>
        </div>
      </div>
      <section className="projects">
        {projects.map((project, index) => (
          <div key={index}>
            {LoggedInUser ? (
              <div>
                <button>
                  <Link to={`/project/edit/${project._id}`}>Edit</Link>
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    handleDelete(project._id);
                  }}
                >
                  Delete
                </button>
              </div>
            ) : null}
            <div className="projects">
              <Link to={`/project/${project._id}`} className="no-style-link">
                <h2>{project.name}</h2>
                <hr className={ThemeColor(project.backgroundColor, "colored-separator")}></hr>
              </Link>
            </div>
          </div>
        ))}
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
