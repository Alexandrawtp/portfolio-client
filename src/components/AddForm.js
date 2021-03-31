import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const AddForm = () => {
  return (
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
  );
};

export default AddForm;
