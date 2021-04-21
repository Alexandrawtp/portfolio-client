import React from "react";
import Grid from "@material-ui/core/Grid";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

const AddPicture = () => {
  return (
    <>
      <b className="grey flex-container">Pictures</b>
      <h4>Home</h4>
      <Grid className="flex-container">
        <Grid item xs={12} sm={6} className="horizontally-align">
          <button type="button" className="add-btn">
            <AddRoundedIcon />
          </button>
          <input name="image" type="file" className="custom-file-input" />
        </Grid>
        </Grid>
      {/* <h4>Images</h4>
      <Grid className="flex-container">
        <Grid item sm={6} className="horizontally-align">
          <button type="button" className="add-btn">
            <AddRoundedIcon />
          </button>
          <input name="files" type="file" multiple accept="image/*,video/*" className="custom-file-input" />
        </Grid>
      </Grid>
      */}
    </>
  );
};

export default AddPicture;
