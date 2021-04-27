import React from "react";
import Button from "@material-ui/core/Button";
import UseStyles from "./UseStyle.js";
import Grid from "@material-ui/core/Grid";

const btnText = (text) => {
  switch (text) {
    case "signIn":
      return "sign in";
    case "sigUp":
      return "sign up";
    case "discover":
      return "discover";
    case "delete":
      return "delete";
    case "technologies":
      return "technologies";
    default:
      return "submit";
  }
};

const BlueButton = (props) => {
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

export default BlueButton;
