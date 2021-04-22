import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
const color = blue[600];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: color,
    },
  },
});

const handleChange = (e) => {
  let field = e.target.name;
  let Newtext = e.target.value;
  let cloneProject = JSON.parse(JSON.stringify(project));
  cloneProject[field] = Newtext;
  setProject(cloneProject);
};

const EditForm = () => (
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  </React.Fragment>
</ThemeProvider>
)

export default EditForm;