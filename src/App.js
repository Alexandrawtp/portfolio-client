import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import NavBar from "./components/NavBar.js";
import About from "./components/About.js";
import NewProject from "./components/NewProject.js";
import ProjectDetails from "./components/ProjectDetails";
import SignIn from "./components/SignIn.js";
import "./App.css";

const App = () => (
  <div>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/add" component={NewProject} />
        <Route path="/login" component={SignIn} />
        <Route path="/project/:id" render={(props) => <ProjectDetails {...props}/>} />
      </Switch>
    </Router>
  </div>
);

export default App;
