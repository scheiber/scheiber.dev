import "./Now.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const About = () => (
  <div className="now">
    <HelmetProvider>
      <Helmet>
        <title>Jonathan Scheiber | Now</title>
      </Helmet>
    </HelmetProvider>
    <h1 className="title">What I'm Focused on Now</h1>
    <div className="now-text">
      <p>
        This page is inspired by{" "}
        <a className="text-link" href="https://sive.rs/now">
          Derek Sivers'
        </a>{" "}
        now page and the{" "}
        <a className="text-link" href="https://nownownow.com/about">
          /now page movement
        </a>
        . The purpose of this page is to share what I am currently focused on at
        this point in their life.
      </p>
      <h1 className="subheader">Learning</h1>
      <p>
        I'm currently completing professional certificate programs through{" "}
        <a className="text-link" href="https://www.coursera.org/">
          Coursera
        </a>{" "}
        to improve my technical skills, including{" "}
        <a
          className="text-link"
          href="https://www.coursera.org/professional-certificates/google-ux-design"
        >
          Google UX Design
        </a>{" "}
        and{" "}
        <a
          className="text-link"
          href="https://www.coursera.org/professional-certificates/google-it-support"
        >
          Google IT Support
        </a>
        .
      </p>
    </div>
  </div>
);

export default About;
