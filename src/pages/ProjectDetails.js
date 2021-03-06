import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import PrimaryButton from '../components/PrimaryButton';
import NavBar from '../components/NavBar';
import SecondaryButton from '../components/SecondaryButton';
import MobileVideoPlayer from '../components/MobileVideoPlayer';

const ProjectDetails = (props) => {
  let projectId = props.match.params.id;
  const [project, setProject] = useState(null);
  const windowWidth = window.innerWidth;

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/project/${projectId}`)
      .then((response) => setProject(response.data))
      .catch((err) => console.log('Getting project failed', err));
  }, [setProject, projectId]);

  if (!project) {
    return <></>;
  }

  return (
    <>
      <NavBar />
      <div className='divider' />
      <div className='project-header'>
        <h1>{project.name}</h1>
        <h2 className='paragraph'>{project.date}</h2>
        <div className='paragraph'>
          <b>Teammate :</b> {project.teammates} | {project.technologies}
        </div>
        <div className='paragraph'>{project.about}</div>
        <div className='paragraph'>{project.description}</div>
        <div className='horizontally-align double-buttons'>
          <a
            href={project.url}
            target='_blank'
            rel='noreferrer'
            className='no-style-link'
          >
            <PrimaryButton addText='discover' />
          </a>
          <a
            href={project.githubRepo}
            target='_blank'
            rel='noreferrer'
            className='no-style-link'
          >
            <SecondaryButton addText='github' />
          </a>
        </div>
      </div>
      <div className='horizontally-align project-bloc'>
        {windowWidth > 450 ? (
          <video autoPlay loop muted className='video-project'>
            <source src={project.video} type='video/mp4'></source>
            Your browser does not support HTML video tag
          </video>
        ) : (
          <MobileVideoPlayer video={project.video} />
        )}
        <img src={project.image} alt='screen' className='home-img' />
        <img src={project.horizontal} alt='screen' className='middle-img' />
        <img src={project.tablette} alt='screen' className='middle-img' />
      </div>
    </>
  );
};

export default ProjectDetails;
