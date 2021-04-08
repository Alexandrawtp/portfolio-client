import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

const ThemeColor = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const theme = (themeNumber) => setSelectedTheme(themeNumber);

  return (
    <>
      <b className="grey flex-container">Theme Colors</b>
      <input
        type="button"
        name="backgroundColor"
        value={selectedTheme}
        className="no-borders themeName"
        readonly
      />
      <Grid item xs={12} sm={6} className="flex-container">
        <button
          className="color-palette no-borders"
          onClick={() => theme("Blue")}
        >
          <div className="left-color secondary-1"></div>
          <div className="right-color primary-1"></div>
        </button>
        <button
          className="color-palette no-borders"
          onClick={() => theme("Red")}
        >
          <div className="left-color secondary-2"></div>
          <div className="right-color primary-2"></div>
        </button>
        <button className="color-palette no-borders" onClick={() => theme("Yellow")}>
          <div className="left-color secondary-3"></div>
          <div className="right-color primary-3"></div>
        </button>
        <button className="color-palette no-borders" onClick={() => theme("Neutral")}>
          <div className="left-color secondary-4"></div>
          <div className="right-color primary-4"></div>
        </button>
      </Grid>
    </>
  );
};

export default ThemeColor;
