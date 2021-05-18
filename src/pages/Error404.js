import React from 'react';
import NavBar from '../components/NavBar.js';

const Error404 = () => (
  <div>
    <NavBar />
    <div className='error-page css-selector'>
    <div className='error-page-content'>
    This page doesn't exist.
    </div>
    </div>
  </div>
);
export default Error404;
