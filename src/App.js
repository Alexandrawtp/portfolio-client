import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import NewProject from "./components/NewProject.js";
import ProjectDetails from "./components/ProjectDetails";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp";

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/add" component={NewProject} />
      <Route
        path="/project/:id"
        render={(props) => <ProjectDetails {...props} />}
      />
    </Switch>
  </Router>
);

export default App;
