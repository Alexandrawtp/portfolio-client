import React from 'react';
import Doughnut from './Doughnut';

const Technologies = () => (
  <section className='tech-section'>
  <div className="section-content horizontally-align">
    <Doughnut />
    <div className='technologies'>
      <div className='technology'>
        <img
          src='https://res.cloudinary.com/alexandra-wtp/image/upload/c_crop,h_400,w_400/v1619086218/Technologies/js.png'
          alt='js-logo'
          className='logo-tech'
        />
        <h3 className="tech-title">Javascript ES6</h3>
      </div>
      <div className='technology'>
        <img
          src='https://res.cloudinary.com/alexandra-wtp/image/upload/v1619086218/Technologies/react.jpg'
          alt='react-logo'
          className='logo-tech'
        />
        <h3 className="tech-title">React</h3>
      </div>
      <div className='technology'>
        <img
          src='https://res.cloudinary.com/alexandra-wtp/image/upload/v1619086218/Technologies/node.png'
          alt='node-logo'
          className='logo-tech'
        />
        <h3 className="tech-title">NodeJS</h3>
      </div>
      <div className='technology'>
        <img
          src='https://res.cloudinary.com/alexandra-wtp/image/upload/v1619086218/Technologies/mongo-db.gif'
          alt='mongo-db-logo'
          className='logo-tech'
        />
        <h3 className="tech-title">MongoDB</h3>
      </div>
      <div className='technology'>
        <img
          src='https://res.cloudinary.com/alexandra-wtp/image/upload/v1619615546/Technologies/html-5_.png'
          alt='html5-logo'
          className='logo-tech'
        />
        <h3 className="tech-title">HTML5</h3>
      </div>
      <div className='technology'>
        <img
          src='https://res.cloudinary.com/alexandra-wtp/image/upload/c_crop/v1619086218/Technologies/css-3.png'
          alt='css3-logo'
          className='logo-tech'
        />
        <h3 className="tech-title">CSS3</h3>
      </div>
      <div className='technology'>
        <img
          src='https://res.cloudinary.com/alexandra-wtp/image/upload/v1619086218/Technologies/material-ui.png'
          alt='material-ui-logo'
          className='logo-tech'
        />
        <h3 className="tech-title">Material UI</h3>
      </div>
      <div className='technology'>
        <img
          src='https://res.cloudinary.com/alexandra-wtp/image/upload/v1620309346/typescript_arene6.png'
          alt='typescript-logo'
          className='logo-tech'
        />
        <h3 className="tech-title">Typescript</h3>
      </div>
    </div>
    </div>
  </section>
);

export default Technologies;