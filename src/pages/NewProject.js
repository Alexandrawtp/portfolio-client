import React, {useState} from "react";
import AddForm from "../components/AddForm.js";
import AddPicture from "../components/AddPicture.js";
import ThemeColor from "../components/ThemeColor.js";
import Button from "../components/GradientButton.js";
import axios from "axios";
import config from "../config";
import successIcon from "../images/successIcon.png";

export default function Form(props) {
  const [successMessage, setSuccessMessage] = useState("");

  const displayMessage = () =>
    successMessage ? (
      <div className="error-message">
        <img src={successIcon} alt="alert-icon" className="alert-icon" />
        <p>{successMessage.name} has been added to your projects.</p>
      </div>
    ) : null


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
    let backgroundColor = e.target.backgroundColor.value;

    let uploadForm = new FormData();
    uploadForm.append("imageUrl", image);

    axios
      .post(`${config.API_URL}/api/upload`, uploadForm)
      .then((response) =>
        axios.post(`${config.API_URL}/api/create`, {
          name,
          date,
          about,
          description,
          technologies,
          url,
          teammates,
          githubRepo,
          image: response.data.image,
          backgroundColor
        })
         .then((response) => setSuccessMessage(response.data))
         .catch((error) => setSuccessMessage(error.response.data.errorMessage))
      )
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={(e) => addData(e)} className="form">
      <AddForm successMessage={successMessage}/>
      <ThemeColor />
      <AddPicture />
      <Button type="submit" addText="submit" onClick={() => displayMessage}/>
    </form>
  );
}
