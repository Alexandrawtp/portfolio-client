import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';

const AddForm = () => {
  
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: deepPurple[300],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Typography variant='h6' gutterBottom>
          New project
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField name='name' label='Name' fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name='date' label='Date' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField name='about' label='About' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField name='description' label='Description' fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id='url' name='url' label='Url' fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name='teammates' label='Teammates' fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name='technologies' label='Technologies' fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name='githubRepo' label='Github Repository' fullWidth />
          </Grid>
        </Grid>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default AddForm;
