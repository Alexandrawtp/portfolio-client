import React from 'react';
import ProfilePicture from '../components/ProfilePic';

const Presentation = () => (
  <section className='paragraph-about horizontally-align'>
    <div className='about-text'>
      <p>
        I came to web development by chance two years ago as I was working as an
        art historian. At this time, one of my clients asked me for advice on
        how to build her website, and as I was doing some Python as an amateur,
        I suggested her to try with a CMS.
      </p>
      <p>
        It was the first time I realized I could code professionally, and my
        first contact with Javascript. It was incredible to be able to design a
        whole website with one language!
      </p>
      <p>
        In 2020, after a year of reflection and learning on the internet, I
        decided to completed my training by a FullStack Development bootcamp
        with Ironhack.
      </p>
    </div>
    <div>
      <ProfilePicture />
    </div>
  </section>
);

export default Presentation;
