import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App.js";
import { Link } from "react-router-dom";
import config from "../config";
import axios from "axios";
import ThemeColor from "../components/PaletteColors.js";
import ProjectBtnDelete from "../components/ProjectBtnDelete.js";
import ProjectBtnEdit from "../components/ProjectBtnEdit.js";

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
      <h1>Welcome to my portfolio</h1>
      <section>
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
            <Link
              to={`/project/${project._id}`}
              className="no-style-link text-boxes"
            >
              <h3>{project.name}</h3>
            </Link>
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
