import React, { useState } from "react";
import axios from "axios";
import config from "../config";
import { useHistory } from "react-router-dom";

const LogoutBtn = () => {
  let history = useHistory();
  const [LoggedInUser, setLoggedInUser] = useState(null);
  const handleLogout = () => {
    axios
      .post(`${config.API_URL}/api/logout`, {})
      .then(() => setLoggedInUser(null), history.push("/"))
      .catch((err) => err, console.log("Logout failed."));
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutBtn;