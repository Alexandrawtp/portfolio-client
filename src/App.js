import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import NewProject from './pages/NewProject.js';
import ProjectDetails from './pages/ProjectDetails.js';
import EditProject from './pages/EditProject';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Error404 from './pages/Error404.js';
import axios from 'axios';
import config from './config';

export const UserContext = React.createContext();
export const ProjectContext = React.createContext();

const App = () => {
  const [LoggedInUser, setLoggedInUser] = useState(false);
  console.log('logged in ?', LoggedInUser);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!LoggedInUser) {
      axios
        .get(`${config.API_URL}/api/me`, { withCredentials: true })
        .then((response) => setLoggedInUser(response.data))
        .catch((error) => error.response.data.errorMessage);
    }
  }, [LoggedInUser, setLoggedInUser]);

  const handleSignUp = (e) => {
    e.preventDefault();
    let user = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post(`${config.API_URL}/api/signup`, user, { withCredentials: true })
      .then((response) => setLoggedInUser(response.data))
      .catch((error) => setErrorMessage(error.response.data.errorMessage));
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    let userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post(`${config.API_URL}/api/signin`, userData, { withCredentials: true })
      .then((response) => setLoggedInUser(response.data))
      .catch((error) => setErrorMessage(error.response.data.errorMessage));
  };

  const handleLogout = () => {
    axios
      .post(`${config.API_URL}/api/logout`, {}, { withCredentials: true })
      .then(() => setLoggedInUser(false))
      .catch((err) => err);
  };

  return (
    <UserContext.Provider value={LoggedInUser}>
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Home onLogOut={handleLogout} />}
          />
          <Route path='/about' component={About} />
          <Route path='/login'>
            {LoggedInUser ? (
              <Redirect to='/' />
            ) : (
              <Login onSignIn={handleSignIn} error={errorMessage} />
            )}
          </Route>
          <Route path='/signup'>
              <SignUp onSignUp={handleSignUp} error={errorMessage} />
          </Route>
          <Route path='/add'>
            {LoggedInUser ? (
              <NewProject error={errorMessage} />
            ) : (
              <Redirect to='/' />
            )}
          </Route>
          <Route
            path='/project/edit/:id'
            render={(props) => <EditProject {...props} />}
          />
          <Route
            path='/project/:id'
            render={(props) => <ProjectDetails {...props} />}
          />
          <Route path='/' component={Error404} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
