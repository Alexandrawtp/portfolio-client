import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import NewProject from "./pages/NewProject.js";
import ProjectDetails from "./pages/ProjectDetails.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Error404 from "./pages/Error404.js";
import axios from "axios";
import config from "./config";

const App = () => {
  const [loggedInuser, setLoggedInUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [setAuthorisation] = useState(null);

  const handleUserSession = () => {
    console.log("handleSession called")
    axios.get(`${config.API_URL}/api/me`)
    .then((response) => setAuthorisation(response.data))
    .catch(err => console.log("No active session", err))
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    let user = {
      firstName: e.target.firstName.value,                                                                   
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

      axios
      .post(`${config.API_URL}/api/signup`, user)
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
      .post(`${config.API_URL}/api/signin`, userData)
      .then((response) => setLoggedInUser(response.data))
      .catch((error) => setErrorMessage(error.response.data.errorMessage));
  };

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" render={() => <Login loginUser={handleSignIn} user={loggedInuser} error={errorMessage}/>}/>
        <Route path="/signup" render={() => <SignUp loginUser={handleSignUp} error={errorMessage}/>} />
        <Route path="/add" component = {NewProject} userSession={handleUserSession} error={errorMessage}/>
        <Route path="/project/:id" render={(props) => <ProjectDetails {...props} />}/>
        <Route path="/" component={Error404} />
      </Switch>
    </Router>
  );
};

export default App;