import React from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "./Button.js";
import axios from "axios";
import config from "../config";


export default function Form() {
  let history = useHistory();

  const addData = (e) => {
    let name = e.target.name.value;
    let date = e.target.date.value;
    let about = e.target.about.value;
    let description = e.target.description.value;
    let technologies = e.target.technologies.value;
    let url = e.target.url.value;
    let teammates = e.target.teammates.value;
    let githubRepo = e.target.githubRepo.value;

    axios.post(`${config.API_URL}/api/create`, {
      name,
      date,
      about,
      description,
      technologies,
      url,
      teammates,
      githubRepo,
    })
    .then(response => console.log(response.data), history.push("/"))
    .catch(err => console.log(err))
  };

  return (
    <form onSubmit={addData}>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          New project
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField id="name" name="name" label="Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="date" name="date" label="Date" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField id="about" name="about" label="About" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              name="description"
              label="Description"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="url" name="url" label="Url" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="teammates"
              name="teammates"
              label="Teammates"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="technologies"
              name="technologies"
              label="Technologies"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="githubRepo"
              name="githubRepo"
              label="Github Repository"
              fullWidth
            />
          </Grid>
        </Grid>
      </React.Fragment>
      <Button type="submit"/>
    </form>
  );
};