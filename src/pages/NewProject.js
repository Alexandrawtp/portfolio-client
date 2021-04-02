import React, {useState} from "react";
import AddForm from "../components/AddForm.js";
import AddPicture from "../components/AddPicture.js";
import ThemeColor from "../components/ThemeColor.js";
import Button from "../components/Button.js";
import axios from "axios";
import config from "../config";

export default function Form(props) {
  console.log(props)
  const [setMessage] = useState(null);

  const addData = (e) => {
    e.preventDefault();
    console.log(e.target.backgroundColor.value);
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
        //  .then((response) => setMessage(response.data))
        //  .catch((error) => setMessage(error.response.data.errorMessage))
      )
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={(e) => addData(e)} className="form">
      <AddForm />
      <ThemeColor />
      <AddPicture />
      <Button type="submit" />
    </form>
  );
}
