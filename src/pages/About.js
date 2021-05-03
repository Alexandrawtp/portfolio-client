import React from 'react';
import NavBar from '../components/NavBar';
import Presentation from '../components/Presentation';
import Contact from '../components/Contact';
import Doughnut from '../components/Doughnut';

const About = () => {
  return (
    <>
      <NavBar />
      <Presentation />
      <div className='horizontally-align blue-background'>
        <Doughnut />
        <Contact />
      </div>
    </>
  );
};

export default About;
