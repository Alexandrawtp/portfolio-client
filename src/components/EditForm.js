import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import { useHistory } from "react-router-dom";
import Navbar from "./NavBar";

const color = blue[600];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: color,
    },
  },
});

const EditForm = (props) => {
  let projectId = props.match.params.id;
  const [project, setProject] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/project/${projectId}`)
      .then((response) => setProject(response.data))
      .catch((err) => console.log("Getting project failed", err));
  }, [setProject, projectId]);

  const handleNameChange = (e) => {
    let text = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject.name = text;
    setProject(cloneProject);
  };

  const handleDateChange = (e) => {
    let text = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject.date = text;
    setProject(cloneProject);
  };

  const handleAboutChange = (e) => {
    let text = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject.about = text;
    setProject(cloneProject);
  };

  const handleDeschange = (e) => {
    let text = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject.description = text;
    setProject(cloneProject);
  };

  const handleTechChange = (e) => {
    let text = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject.technologies = text;
    setProject(cloneProject);
  };

  const handleUrlChange = (e) => {
    let text = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject.url = text;
    setProject(cloneProject);
  };

  const handleTeamChange = (e) => {
    let text = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject.teammates = text;
    setProject(cloneProject);
  };

  const handleGithubChange = (e) => {
    let text = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject.githubRepo = text;
    setProject(cloneProject);
  };

  const handleEdit = (e, project) => {
    e.preventDefault();

    axios
      .patch(`${config.API_URL}/api/project/modify/${project._id}`, {
        name: project.name,
        date: project.date,
        about: project.about,
        description: project.description,
        technologies: project.technologies,
        url: project.url,
        teammates: project.teammates,
        githubRepo: project.githubRepo,
        backgroundColor: project.backgroundColor,
        image: project.image,
      })
      .then(() => history.push("/"))
      .catch((err) => err);
  };

  return (
    <div>
      <Navbar />
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Modify project
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-multiline-static"
                name="name"
                label="Multiline"
                multiline
                fullWidth
                rows={2}
                defaultValue={project.name}
                onChange={handleNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-multiline-static"
                name="date"
                label="Multiline"
                multiline
                fullWidth
                rows={2}
                defaultValue={project.date}
                onChange={handleDateChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="about"
                label="About"
                multiline
                fullWidth
                rows={4}
                defaultValue={project.about}
                onChange={handleAboutChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Description"
                multiline
                fullWidth
                rows={4}
                defaultValue={project.description}
                onChange={handleDeschange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="url"
                label="Url"
                multiline
                fullWidth
                rows={2}
                defaultValue={project.url}
                onChange={handleUrlChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="teammates"
                label="Teammates"
                multiline
                fullWidth
                rows={2}
                defaultValue={project.teammates}
                onChange={handleTeamChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="technologies"
                label="Technologies"
                multiline
                fullWidth
                rows={2}
                defaultValue={project.technologies}
                onChange={handleTechChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="githubRepo"
                label="Github Repository"
                multiline
                fullWidth
                rows={2}
                defaultValue={project.githubRepo}
                onChange={handleGithubChange}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      </ThemeProvider>
      <button onClick={(e) => handleEdit(e, project)}>Submit</button>
    </div>
  );
};

export default EditForm;
