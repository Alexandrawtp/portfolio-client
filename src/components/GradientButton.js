import React from "react";
import Button from "@material-ui/core/Button";
import UseStyles from "../components/UseStyle.js";

const btnText = (text) => {
  switch (text) {
    case "submit":
      return "submit";
    case "signIn":
      return "sign in";
    case "sigUp":
      return "sign up";
    default:
      return "submit";
  }
};

const GradientButton = (props) => {
  let text = props.addText;
  const classes = UseStyles();
  return (
    <Button className={classes.root} type="submit">
      {btnText(text)}
    </Button>
  );
};

export default GradientButton;
