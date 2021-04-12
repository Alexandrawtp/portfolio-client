import React from "react";
import Button from "@material-ui/core/Button";
import UseStyles from "../components/UseStyle.js";
import Grid from "@material-ui/core/Grid";

const btnText = (text) => {
  switch (text) {
    case "submit":
      return "submit";
    case "signIn":
      return "sign in";
    case "sigUp":
      return "sign up";
    case "logout":
      return "log out";
    case "contactMe":
      return "contact me";
    default:
      return "submit";
  }
};

const TransparentButton = (props) => {
  let text = props.addText;
  const classes = UseStyles();
  return (
    <Grid container justify="center" width="100%">
      <Button className={classes.transparentButton} type="submit">
        {btnText(text)}
      </Button>
    </Grid>
  );
};

export default TransparentButton;