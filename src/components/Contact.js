import React from 'react';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import deepPurple from '@material-ui/core/colors/deepPurple';
import SecondaryButton from './SecondaryButton';

const Contact = () => (
  <section className='contact horizontally-align'>
    <div className='vertically-align contact-group'>
      <div>
        <LocationOnRoundedIcon
          style={{ color: deepPurple[200], fontSize: 60 }}
        />
      </div>
      <div className='location'>PARIS</div>
    </div>

    <div className='vertically-align contact-group'>
      <div className='centered-content'>
        <MailRoundedIcon style={{ color: deepPurple[200], fontSize: 60 }} />
      </div>
      <div className='centered-content'>
        <a
          className='no-style-link'
          href='mailto: alexandrawestendorp@gmail.com'
        >
          <SecondaryButton addText='Email' />
        </a>
      </div>
    </div>

    <div className='vertically-align contact-group'>
      <div>
        <img
          src='https://res.cloudinary.com/alexandra-wtp/image/upload/v1620305122/LinkedIn-Logo.wine_b5jvv4.png'
          alt='logo-linkedin'
          width='60px'
        />
      </div>
      <div>
        <a
          href='https://www.linkedin.com/in/alexandra-westendorp/'
          target='_blank'
          rel='noreferrer'
          className='no-style-link'
        >
          <SecondaryButton addText='Linkedin' />
        </a>
      </div>
    </div>

    <div className='vertically-align contact-group'>
      <div>
        <img
          src='https://res.cloudinary.com/alexandra-wtp/image/upload/v1620307818/GitHub-Mark-120px-plus_gahxd8.png'
          alt='logo-github'
          width='60px'
        />
      </div>
      <div>
        <a
          href='https://github.com/Alexandrawtp'
          target='_blank'
          rel='noreferrer'
          className='no-style-link'
        >
          <SecondaryButton addText='Github' />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
