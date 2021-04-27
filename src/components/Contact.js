import React from "react";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import ChevronRight from "@material-ui/icons/ChevronRight";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
import blue from "@material-ui/core/colors/blue";

const Contact = () => (
  <section className="contact vertically-align">
    <div className="horizontally-align location">
      <div className="vertically-align contact-group">
        <div>
          <LocationOnRoundedIcon style={{ color: blue[600], fontSize: 80 }} />
        </div>
        <h3>Paris</h3>
        <div>Opened to remote</div>
      </div>
      <div className="vertically-align contact-group">
        <div>
          <MailRoundedIcon style={{ color: blue[600], fontSize: 80 }} />
        </div>
        <h3>Contact</h3>
        <div>
          <a
            className="chevron-link no-style-link"
            href="mailto: alexandrawestendorp@gmail.com"
          >
            Email
            <ChevronRight />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/alexandra-westendorp/"
            target="_blank"
            rel="noreferrer"
            className="chevron-link no-style-link"
          >
            Linkedin
            <ChevronRight />
          </a>
        </div>
      </div>
    </div>

    <div className="vertically-align">
      <a
        href="https://github.com/Alexandrawtp"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://res.cloudinary.com/alexandra-wtp/image/upload/v1616696859/GitHub-Logo.wine_wuufz1.png"
          alt="logo-linkedin"
          width="130px"
        ></img>
      </a>
      <h3>Github</h3>
      <div className="centered-content">
      <a
        href="https://github.com/Alexandrawtp"
        target="_blank"
        rel="noreferrer"
        className="chevron-link no-style-link"
      >
        Visit
        <ChevronRight />
      </a>
      </div>
    </div>
  </section>
);

export default Contact;
