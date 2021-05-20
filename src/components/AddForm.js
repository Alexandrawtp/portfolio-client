import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const AddForm = () => {

  return (
      <React.Fragment>
        <Typography variant='h6' gutterBottom>
          New project
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField name='name' label='Name' fullWidth color='secondary'/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name='date' label='Date' fullWidth color='secondary'/>
          </Grid>
          <Grid item xs={12}>
            <TextField name='about' label='About' fullWidth color='secondary'/>
          </Grid>
          <Grid item xs={12}>
            <TextField name='description' label='Description' fullWidth color='secondary'/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id='url' name='url' label='Url' fullWidth color='secondary'/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name='teammates' label='Teammates' fullWidth color='secondary'/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name='technologies' label='Technologies' fullWidth color='secondary'/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name='githubRepo' label='Github Repository' fullWidth color='secondary'/>
          </Grid>
        </Grid>
      </React.Fragment>
  );
};

export default AddForm;
