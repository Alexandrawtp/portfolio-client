import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const color = red[300];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: color,
    },
  },
});

const handleEdit = (projectId) => {
  
}

const EditForm = (props) => {
  let projectId = props.match.params.id;
  const [project, setProject] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/project/${projectId}`)
      .then((response) => setProject(response.data))
      .catch((err) => console.log("Getting project failed", err));
  }, [setProject, projectId]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Modify project
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField id="name" name="name" label="Name" fullWidth placeholder={project.name} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="date" name="date" label="Date" fullWidth placeholder={project.date}/>
            </Grid>
            <Grid item xs={12}>
              <TextField id="about" name="about" label="About" fullWidth placeholder={project.about}/>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="description"
                name="description"
                label="Description"
                fullWidth
                className="form-style"
                placeholder={project.description}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="url" name="url" label="Url" fullWidth placeholder={project.url} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="teammates"
                name="teammates"
                label="Teammates"
                fullWidth
                placeholder={project.teammates}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="technologies"
                name="technologies"
                label="Technologies"
                fullWidth
                placeholder={project.technologies}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="githubRepo"
                name="githubRepo"
                label="Github Repository"
                fullWidth
                placeholder={project.githubRepo}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      </ThemeProvider>
      <button onClick={handleEdit(projectId)}>Edit</button>
    </div>
  );
};

export default EditForm;
