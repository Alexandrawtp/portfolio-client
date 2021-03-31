import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const ThemeColor = () => (
  <>
  <b className="grey flex-container">Theme Colors</b>
  <Grid item xs={12} sm={6} className="flex-container">
  <div className="color-palette">
    <div className="left-color secondary-1"></div>
    <div className="right-color primary-1"></div>
  </div>
  <div className="color-palette">
    <div className="left-color secondary-2"></div>
    <div className="right-color primary-2"></div>
  </div>
  <div className="color-palette">
    <div className="left-color secondary-3"></div>
    <div className="right-color primary-3"></div>
  </div>
  <div className="color-palette">
    <div className="left-color secondary-4"></div>
    <div className="right-color primary-4"></div>
  </div>
    {/* <TextField
      id="backgroundColor"
      name="backgroundColor"
      label="Theme color"
      fullWidth
    /> */}
  </Grid>
  </>
);

export default ThemeColor;
