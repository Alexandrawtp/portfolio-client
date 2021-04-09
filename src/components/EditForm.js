import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { useHistory } from "react-router-dom";

const color = red[300];

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
  }

  const handleDateChange = (e) => {
    let text = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject.date = text;
    setProject(cloneProject);
  }

  const handleAboutChange = (e) => {
    let text = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject.about = text;
    setProject(cloneProject);
  }
  
  const handleDeschange = (e) => {
    let text = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject.description = text;
    setProject(cloneProject);
  }
  
  const handleTechChange = (e) => {
    let text = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject.technologies = text;
    setProject(cloneProject);
  }
  
  const handleUrlChange = (e) => {
    let text = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject.url = text;
    setProject(cloneProject);
  }
  
  const handleTeamChange = (e) => {
    let text = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject.teammates = text;
    setProject(cloneProject);
  }
  
  const handleGithubChange = (e) => {
    let text = e.target.value;
    let cloneProject = JSON.parse(JSON.stringify(project));
    cloneProject.githubRepo = text;
    setProject(cloneProject);
  }

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
        image: project.image
      })
      .then(() => history.push("/"))
      .catch((err) => err)
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Modify project
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                name="name"
                label="Name"
                fullWidth
                onChange={handleNameChange}
                value={project.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="date"
                name="date"
                label="Date"
                fullWidth
                onChange={handleDateChange}
                value={project.date}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="about"
                name="about"
                label="About"
                fullWidth
                onChange={handleAboutChange}
                value={project.about}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="description"
                name="description"
                label="Description"
                fullWidth
                className="form-style"
                onChange={handleDeschange}
                value={project.description}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="url"
                name="url"
                label="Url"
                fullWidth
                onChange={handleUrlChange}
                value={project.url}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="teammates"
                name="teammates"
                label="Teammates"
                fullWidth
                onChange={handleTeamChange}
                value={project.teammates}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="technologies"
                name="technologies"
                label="Technologies"
                fullWidth
                onChange={handleTechChange}
                value={project.technologies}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="githubRepo"
                name="githubRepo"
                label="Github Repository"
                fullWidth
                onChange={handleGithubChange}
                value={project.githubRepo}
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
