import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../App';
import config from '../config';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import MyDialogue from './Dialogue';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const LoggedInUser = useContext(UserContext);
  const [openedDialogue, setOpenedDialogue] = useState(false);
  const [nameToDelete, setNameToDelete] = useState([]);
  const [idToDelete, setIdToDelete] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((err) => console.log('Getting projects failed', err));
  }, [setProjects]);

  if (!projects) {
    return <></>;
  }

  return (
    <section className='horizontally-align project-bloc'>
      {projects.map((project, index) => (
        <span key={index} className='home-group-project'>
          <Link to={`/project/${project._id}`} className='no-style-link'>
            {project.name === 'Fabienne Fiacre' ? (
              <video
                controls
                autoPlay
                loop
                muted
                className='video-project home-shadow'
              >
                <source src={project.video} type='video/mp4'></source>
                Your browser does not support HTML video tag
              </video>
            ) : (
              <img src={project.image} alt='project' className='home-project' />
            )}
          </Link>
          {LoggedInUser ? (
            <div className={classes.root}>
              <Fab
                color='primary'
                aria-label='edit'
                href={`/project/edit/${project._id}`}
              >
                <EditIcon />
              </Fab>
              <Fab
                color='secondary'
                aria-label='edit'
                onClick={() => {
                  setOpenedDialogue(true);
                  setIdToDelete(project._id);
                  setNameToDelete(project.name);
                }}
              >
                <DeleteIcon />
              </Fab>
            </div>
          ) : null}
        </span>
      ))}
      <MyDialogue
        projectName={nameToDelete}
        projectId={idToDelete}
        open={openedDialogue}
        setOpen={setOpenedDialogue}
      />
    </section>
  );
};

export default Projects;
