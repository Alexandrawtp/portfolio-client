import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App.js";
import { Link } from "react-router-dom";
import config from "../config";
import axios from "axios";
import PurpleButton from "../components/PurpleButton.js";
import NavBarWhite from "../components/NavBarWhite";
import chevronR from "../images/chevron.png";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import UseStyle from "../components/UseStyle";
import Technologies from "../components/Technologies";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Home = (props) => {
  const [projects, setProjects] = useState([]);
  const LoggedInUser = useContext(UserContext);
  const classes = UseStyle();
  const [open, setOpen] = React.useState(false);

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseAndDelete = (projectId) => {
    setOpen(false);
    handleDelete(projectId);
  };

  const handleClose = () => {
    setOpen(false);
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
                Contact me <img src={chevronR} alt="chevron" width="25px" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <section className="horizontally-align project-bloc" id="projects">
        {projects.map((project, index) => (
          <span key={index} className="home-group-project">
            <Link to={`/project/${project._id}`} className="no-style-link">
              {project.name === "Fabienne Fiacre" ? (
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className="video-project home-shadow"
                >
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
            {LoggedInUser ? (
              <div>
                <Button
                  variant="outlined"
                  color="primary"
                  href={`/project/edit/${project._id}`}
                >
                  Edit
                </Button>
                <Button
                  onClick={handleClickOpen}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{`Do you really want to delete ${project.name} ?`}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={() => handleCloseAndDelete(project._id)} color="primary" autoFocus>
                      Yes
                    </Button>
        </DialogActions>
      </Dialog>
                              </div>
            ) : null}
          </span>
        ))}
      </section>
      <Technologies />
      {LoggedInUser ? (
        <button type="submit" addText="logout" onClick={props.onLogOut}>
          LOGOUT
        </button>
      ) : null}
    </div>
  );
};

export default Home;
