import React, { useContext } from 'react';
import { UserContext } from '../App.js';
import { Link } from 'react-router-dom';
import config from '../config';
import axios from 'axios';

const NavBar = () => {
  const LoggedInUser = useContext(UserContext);

  const handleLogout = (e) => {
    e.preventDefault();

    axios
      .post(`${config.API_URL}/api/logout`, {}, { withCredentials: true })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className='navBar'>
        <Link to='/'>
          <img
            src='https://res.cloudinary.com/alexandra-wtp/image/upload/v1619110538/icons/logo-black.png'
            alt='logo'
            className='logo-portfolio'
          />
        </Link>
      <div className='nav-list'>
        {LoggedInUser ? (
          <>
            <button
              className='black-nav-element logout-btn'
              onClick={(e) => handleLogout(e)}
            >
              <h3>Logout</h3>
            </button>
            <Link to='/add' className='black-nav-element'>
              <h3>Add </h3>
            </Link>
          </>
        ) : null}
        <Link to='/about' className='black-nav-element'>
          <h3>About</h3>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
