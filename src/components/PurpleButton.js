import React from "react";
import Button from "@material-ui/core/Button";
import UseStyles from "../components/UseStyle.js";
import Grid from "@material-ui/core/Grid";

const btnText = (text) => {
  switch (text) {
    case "discover":
      return "discover";
    case "signIn":
      return "sign in";
    case "sigUp":
      return "sign up";
    case "logout":
      return "log out";
    case "discover projects":
      return "Discover projects";
    default:
      return "submit";
  }
};

const PurpleButton = (props) => {
  let text = props.addText;
  const classes = UseStyles();
  return (
    <Grid container justify="center" width="100%">
      <Button className={classes.root} type="submit">
        {btnText(text)}
      </Button>
    </Grid>
  );
};

export default PurpleButton;
