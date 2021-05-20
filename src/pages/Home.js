import React from 'react';
import Technologies from '../components/Technologies';
import NavBarWhite from '../components/NavBarWhite';
import Projects from '../components/Projects';
import { Link } from 'react-router-dom';
import ProfilePicture from '../components/ProfilePic';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const Home = () => {
  return (
    <>
      <section className='section-1 css-selector '>
        <NavBarWhite />
        <div className='header-content horizontally-align'>
          <div className='section-1-left'>
            <div className='title-home'>
              Welcome, I am Alexandra ! I am a full stack developer.
            </div>
            <div className='horizontally-align double-buttons'>
              <a href='#projects' className='no-style-link'>
                <PrimaryButton addText='projects' />
              </a>
              <Link to={'/about'} className='no-style-link white-link'>
                <SecondaryButton addText='contact me' />
              </Link>
            </div>
          </div>
          <div>
            <ProfilePicture />
          </div>
        </div>
      </section>
      <Technologies />
      <section id='projects'>
        <Projects />
      </section>
    </>
  );
};

export default Home;
