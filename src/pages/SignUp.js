import React, { useContext } from "react";
import { UserContext } from "../App.js";
//import React from "react";
import Button from "../components/GradientButton.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import alertIcon from "../images/alert.png";
import UseStyles from "../components/UseStyle";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

export default function SignUp(props) {
  const classes = UseStyles();
  const color = red[300];
  const LoggedInUser = useContext(UserContext);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: color,
      },
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className="form-title">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
        <ThemeProvider theme={theme}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="false"
                name="firstName"
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <div>
              {props.error ? (
                <div className="error-message">
                  <img
                    src={alertIcon}
                    alt="alert-icon"
                    className="alert-icon"
                  />
                  <p>{props.error}</p>
                </div>
              ) : null}
            </div>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            addText="signUp"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2" className="link">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          </ThemeProvider>
        </form>
      </div>
    </Container>
  );
}
