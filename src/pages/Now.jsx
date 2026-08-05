import "./Now.css";
import { Helmet } from "react-helmet-async";

const Now = () => (
  <div className="now">
    <Helmet>
      <title>Jonathan Scheiber | Now</title>
    </Helmet>
    <h2 className="title">What I'm Focused on Now</h2>
    <div className="now-text">
      <p>
        This page is inspired by{" "}
        <a
          className="text-link"
          href="https://sive.rs/now"
          target="_blank"
          rel="noopener noreferrer"
        >
          Derek Sivers'
        </a>{" "}
        now page and the{" "}
        <a
          className="text-link"
          href="https://nownownow.com/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          /now page movement
        </a>
        . The purpose of this page is to share what I am currently focused on at
        this point in my life.
      </p>
      <h3 className="subheader">Learning</h3>
      <div className="learning-grid">
        <div>
          <a href="https://tryhackme.com/" target="_blank" rel="noopener noreferrer">
            <img
              className="logo"
              src="/images/logos/tryhackme.png"
              alt="TryHackMe logo"
              width="179"
              height="100"
            />
          </a>
          <p>
            I am currently completing cybersecurity training through{" "}
            <a
              className="text-link"
              href="https://tryhackme.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TryHackMe
            </a>
            . Track my progress{" "}
            <a
              className="text-link"
              href="https://tryhackme.com/r/p/Scheiber"
              target="_blank"
              rel="noopener noreferrer"
            >
              on my profile
            </a>
            .
          </p>
        </div>
        <div>
          <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer">
            <img
              className="logo"
              src="/images/logos/coursera.png"
              alt="Coursera logo"
              width="232"
              height="40"
            />
          </a>
          <p>
            I am currently completing professional certificate programs through{" "}
            <a
              className="text-link"
              href="https://www.coursera.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coursera
            </a>{" "}
            to improve my technical skills, including{" "}
            <a
              className="text-link"
              href="https://www.coursera.org/professional-certificates/google-ux-design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google UX Design
            </a>
            ,{" "}
            <a
              className="text-link"
              href="https://www.coursera.org/professional-certificates/google-it-support"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google IT Support
            </a>
            , and{" "}
            <a
              className="text-link"
              href="https://www.coursera.org/professional-certificates/microsoft-cybersecurity-analyst"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Cybersecurity Analyst
            </a>
            .
          </p>
        </div>
      </div>
      <div className="hobbies-grid">
        <div>
          <h3 className="subheader">Watching</h3>
          <a href="https://letterboxd.com/js/" target="_blank" rel="noopener noreferrer">
            <img
              className="logo"
              src="/images/logos/letterboxd.png"
              alt="Letterboxd logo"
              width="337"
              height="50"
            />
          </a>
          <p>
            Track what movies I'm watching on{" "}
            <a
              className="text-link"
              href="https://letterboxd.com/js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Letterboxd
            </a>
            .
          </p>
        </div>
        <div>
          <h3 className="subheader">Listening</h3>
          <a
            href="https://www.last.fm/user/JonScheiber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo"
              src="/images/logos/lastfm.png"
              alt="Last.fm logo"
              width="158"
              height="40"
            />
          </a>
          <p>
            Track what music I'm listening to on{" "}
            <a
              className="text-link"
              href="https://www.last.fm/user/JonScheiber"
              target="_blank"
              rel="noopener noreferrer"
            >
              Last.fm
            </a>
            .
          </p>
        </div>
        <div>
          <h3 className="subheader">Reading</h3>
          <a
            href="https://www.goodreads.com/scheiber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo"
              src="/images/logos/goodreads.png"
              alt="Goodreads logo"
              width="233"
              height="50"
            />
          </a>
          <p>
            Track what books I'm reading on{" "}
            <a
              className="text-link"
              href="https://www.goodreads.com/scheiber"
              target="_blank"
              rel="noopener noreferrer"
            >
              Goodreads
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Now;
