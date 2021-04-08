//import React, { useContext } from "react";
import React from "react";
//import { UserContext } from "../App.js";
import Button from "../components/GradientButton.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import alertIcon from "../images/alert.png";
import UseStyles from "../components/UseStyle.js";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

export default function SignIn(props) {
  const classes = UseStyles();
  const color = red[300];
  //const LoggedInUser = useContext(UserContext);
  //console.log(LoggedInUser)

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
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={props.onSignIn}>
          <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  id="email"
                  name="email"
                  label="Email Address"
                  className={classes.formAfter}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </Grid>
            </Grid>
            {props.error ? (
              <div className="error-message">
                <img src={alertIcon} alt="alert-icon" className="alert-icon" />
                <p>{props.error}</p>
              </div>
            ) : null}
            <Grid container justify="center" width="100%">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                addText="signIn"
                className={classes.submit}
              >
              </Button>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2" className="link">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </ThemeProvider>
        </form>
      </div>
    </Container>
  );
}
