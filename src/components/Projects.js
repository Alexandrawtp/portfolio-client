import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../App';
import config from '../config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';
import AdminButtons from './AdminButtons';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const LoggedInUser = useContext(UserContext);

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
        <span key={index} >
            <Link to={`/project/${project._id}`} className='no-style-link'>
              <Card name={project.name} about={project.about} picture={project.image}/>
            </Link>
          {LoggedInUser ? (
            <AdminButtons projectName={project.name} projectId={project._id} />
          ) : null}
        </span>
      ))}
    </section>
  );
};

export default Projects;
