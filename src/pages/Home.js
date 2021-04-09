import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App.js";
import { Link } from "react-router-dom";
import config from "../config";
import axios from "axios";
import ReactTypingEffect from "react-typing-effect";
import LightingColors from "../components/LightingColors.js";
import Button from "../components/GradientButton.js";

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
      <ReactTypingEffect
        text={["Welcome to my portfolio"]}
        cursor="_"
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        speed={80}
        typingDelay={100}
        eraseDelay={100000}
        className="centered-content"
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return <span key={key}>{char}</span>;
              })}
            </h1>
          );
        }}
      />
      <section className="projects-group">
        {projects.map((project, index) => (
          <div
            key={index}
            className={LightingColors(project.backgroundColor, "home-box")}
          >
            <Link
              to={`/project/${project._id}`}
              className="no-style-link text-boxes"
            >
              <h3>{project.name}</h3>
            </Link>
            {LoggedInUser ? (
              <div>
                <Link to={`/project/${project._id}/edit`}>
                  <button>Edit</button>
                </Link>
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
          </div>
        ))}
      </section>
      <button type="submit" addText="logout" onClick={props.onLogOut}>
        LOGOUT
      </button>
    </div>
  );
};

export default Home;
