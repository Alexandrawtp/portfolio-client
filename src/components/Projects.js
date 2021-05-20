import React, { useState, useEffect } from 'react';
import config from '../config';
import axios from 'axios';
import Card from './Card';

const Projects = () => {
  const [projects, setProjects] = useState([]);

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
        <span key={index}>
          <Card
            name={project.name}
            about={project.about}
            picture={project.image}
            projectId={project._id}
          />
        </span>
      ))}
    </section>
  );
};

export default Projects;
