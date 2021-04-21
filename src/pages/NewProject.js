import React from "react";
import AddForm from "../components/AddForm.js";
import AddPicture from "../components/AddPicture.js";
import PurpleButton from "../components/PurpleButton.js";
import axios from "axios";
import config from "../config";
import NavBar from "../components/NavBar.js";

export default function Form(props) {

  const addData = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let date = e.target.date.value;
    let about = e.target.about.value;
    let description = e.target.description.value;
    let technologies = e.target.technologies.value;
    let url = e.target.url.value;
    let teammates = e.target.teammates.value;
    let githubRepo = e.target.githubRepo.value;
    let image = e.target.image.files[0];

    let uploadForm = new FormData();
    uploadForm.append("imageUrl", image);

    axios
      .post(`${config.API_URL}/api/upload`, uploadForm)
      .then(() =>
        axios
          .post(`${config.API_URL}/api/create`, {
            name,
            date,
            about,
            description,
            technologies,
            url,
            teammates,
            githubRepo,
          })
          .then((response) => response.data)
          .catch((error) => error.response.data.errorMessage)
      )
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavBar />
      <form onSubmit={(e) => addData(e)} className="form">
        <AddForm  />
        <AddPicture />
        <PurpleButton type="submit" addText="submit" />
      </form>
    </>
  );
}
