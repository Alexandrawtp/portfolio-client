import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import UseStyles from '../components/UseStyle';
import NavBar from '../components/NavBar';

export default function SignIn(props) {
  const classes = UseStyles();

  return (
    <>
      <NavBar />
      <div className='divider' />
      <Container component='main' maxWidth='xs'>
        <div className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={props.onSignIn}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id='email'
                    name='email'
                    label='Email Address'
                    color='secondary'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='password'
                    name='password'
                    label='Password'
                    type='password'
                    fullWidth
                    color='secondary'
                  />
                </Grid>
              </Grid>
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
              <Grid container justify='center' width='100%'>
                <PrimaryButton addText='signin' />
              </Grid>
              <Grid container justify='flex-end'>
                <Grid item>
                  <Link href='/signup' variant='body2' color='secondary'>
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}
