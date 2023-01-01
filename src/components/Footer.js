import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer">
      <div>
        <a href="mailto:jonathan@scheiber.dev">
          <button className="big-blue-button">Contact me</button>
        </a>
      </div>
      <div>
        <article>
          <a
            href="https://github.com/Scheiber"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon"
              alt="GitHub"
              title="GitHub"
              src="./images/icons/github.png"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jonscheiber/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon"
              alt="LinkedIn"
              title="LinkedIn"
              src="./images/icons/linkedin.png"
            />
          </a>
        </article>
      </div>
      <p className="footer-text">
        &copy; {year} Jonathan Scheiber. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
