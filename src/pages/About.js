import "./About.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const About = () => (
  <div className="portfolio">
    <HelmetProvider>
      <Helmet>
        <title>Jonathan Scheiber | About</title>
      </Helmet>
    </HelmetProvider>
    <a href="/">
      <h1 className="name">Jonathan Scheiber</h1>
    </a>
    <article>
      <img
        className="headshot"
        src="./images/headshot.png"
        alt="Headshot of Jonathan Scheiber"
      />
    </article>
    <div className="about-text">
      <p>
        Hello, and welcome to my website! My name is Jonathan Scheiber and I am
        a full-stack web developer with a passion for creating dynamic,
        user-friendly websites and applications.
      </p>
      <p>
        I am skilled in a range of technologies, including JavaScript, HTML,
        CSS, React, Express, PostgreSQL, APIs, Node.js, Git, Linux, and macOS. I
        am highly motivated and always looking to improve my skills and stay up
        to date with the latest trends in web development.
      </p>
      <p>
        In my free time, I enjoy participating in hackathons and tinkering with
        new technologies. I am confident in my ability to deliver high-quality,
        scalable solutions.
      </p>
      <p>
        If you have a project in mind or are looking for a reliable developer to
        join your team, please don't hesitate to reach out to me. Thank you for
        visiting.
      </p>
    </div>
    <section>
      <div>
        <a href="/portfolio">
          <button className="big-blue-button">See my work</button>
        </a>
      </div>
      <div>
        <a href="mailto:jonathan@scheiber.dev">
          <button className="big-blue-button">Contact me</button>
        </a>
      </div>
      <article>
        <a href="https://github.com/Scheiber" target="_blank" rel="noreferrer">
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
    </section>
  </div>
);

export default About;
