import React from "react";
import Grid from "@material-ui/core/Grid";
import UploadButtons from "../components/UploadButtons.js";

const AddPicture = () => {

  return (
    <>
      <b className="grey flex-container">Pictures</b>
      <Grid className="flex-container">
        <Grid item xs={12} sm={6} className="horizontally-align">
        <UploadButtons />
          <input
            name="image"
            type="file"
            className="custom-file-input custom-text-main"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AddPicture;
