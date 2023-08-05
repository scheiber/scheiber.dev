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
        this point in my life.
      </p>
      <h1 className="subheader">Learning</h1>
      <a href="https://www.coursera.org/">
        <img
          className="logo"
          src="/images/logos/coursera.png"
          alt="Coursera logo"
          height="50px"
        />
      </a>
      <p>
        I am currently completing professional certificate programs through{" "}
        <a className="text-link" href="https://www.coursera.org/">
          Coursera
        </a>{" "}
        to improve my technical skills, including{" "}
        <a
          className="text-link"
          href="https://www.coursera.org/professional-certificates/google-ux-design"
        >
          Google UX Design
        </a>
        ,{" "}
        <a
          className="text-link"
          href="https://www.coursera.org/professional-certificates/google-it-support"
        >
          Google IT Support
        </a>
        , and{" "}
        <a
          className="text-link"
          href="https://www.coursera.org/professional-certificates/microsoft-cybersecurity-analyst"
        >
          Microsoft Cybersecurity Analyst
        </a>
        .
      </p>
      <h1 className="subheader">Watching</h1>
      <a href="https://www.last.fm/user/JonScheiber">
        <img
          className="logo"
          src="/images/logos/letterboxd.png"
          alt="Letterboxd logo"
          height="50px"
        />
      </a>
      <p>
        Track what movies I've watched on{" "}
        <a className="text-link" href="https://letterboxd.com/js/">
          Letterboxd
        </a>
        .
      </p>
      <h1 className="subheader">Listening</h1>
      <a href="https://www.last.fm/user/JonScheiber">
        <img
          className="logo"
          src="/images/logos/lastfm.png"
          alt="Last.fm logo"
          height="40px"
        />
      </a>
      <p>
        Track what music I'm listening to on{" "}
        <a className="text-link" href="https://www.last.fm/user/JonScheiber">
          Last.fm
        </a>
        .
      </p>
    </div>
  </div>
);

export default About;
