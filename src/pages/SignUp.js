import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import UseStyles from '../components/UseStyle';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import NavBar from '../components/NavBar';

export default function SignUp(props) {
  const classes = UseStyles();
  const color = deepPurple[300];

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: color,
      },
    },
  });

  return (
    <>
      <NavBar />
      <div className='divider' />
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={props.onSignUp}>
            <ThemeProvider theme={theme}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name='firstName'
                    fullWidth
                    id='firstName'
                    label='First Name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                  />
                </Grid>
                <div>
                  {props.error ? (
                    <div className='error-message'>
                      <img
                        src='https://res.cloudinary.com/alexandra-wtp/image/upload/v1619110383/icons/alert-panel.png'
                        alt='alert-icon'
                        className='alert-icon'
                      />
                      <p>{props.error}</p>
                    </div>
                  ) : null}
                </div>
              </Grid>
              <Grid container justify='center' width='100%'>
                <PrimaryButton addText='signup' />
              </Grid>
              <Grid container justify='flex-end'>
                <Grid item>
                  <Link href='/login' variant='body2'>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </ThemeProvider>
          </form>
        </div>
      </Container>
    </>
  );
}
