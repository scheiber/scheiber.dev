import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div>
      <a href="/contact">
        <button className="big-blue-button">Contact me</button>
      </a>
    </div>
    <div>
      <article>
        <a href="https://github.com/Scheiber" target="_blank" rel="noreferrer">
          <img
            className="icon"
            alt="GitHub"
            title="GitHub"
            src="/images/icons/github.png"
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
            src="/images/icons/linkedin.png"
          />
        </a>
      </article>
    </div>
    <p className="footer-text">
      &copy; {new Date().getFullYear()} Jonathan Scheiber. All rights reserved.
    </p>
    <div className="pi">
      <a href="https://resume.scheiber.dev/" title="You've found the secret!">
        &#960;
      </a>
    </div>
  </div>
);

export default Footer;
