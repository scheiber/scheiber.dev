import "./Portfolio.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Portfolio = () => (
  <div className="portfolio">
    <HelmetProvider>
      <Helmet>
        <title>Jonathan Scheiber | Portfolio</title>
      </Helmet>
    </HelmetProvider>
    <a href="/">
      <h1 className="name">Jonathan Scheiber</h1>
    </a>
    <h1 className="title">Portfolio</h1>
    <section className="portfolio-grid">
      <article>
        <a
          alt="Link to Worth a Shot"
          href="http://wshot.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="thumbnail"
            alt="Worth a Shot logo"
            src="./images/thumbnails/worthashot.png"
          />
        </a>
        <div>
          <a
            alt="Link to Worth a Shot"
            href="http://wshot.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-button">Visit website</button>
          </a>
          <a
            alt="Link to Worth a Shot on GitHub"
            href="https://github.com/Scheiber/worthashot"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-button">Read more</button>
          </a>
        </div>
      </article>
      <article>
        <a
          alt="Link to SauceSource"
          href="http://saucesource.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="thumbnail"
            alt="SauceSource logo"
            src="./images/thumbnails/saucesource.png"
          />
        </a>
        <div>
          <a
            alt="Link to SauceSource"
            href="http://saucesource.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-button">Visit website</button>
          </a>
          <a
            alt="Link to Worth a Shot on GitHub"
            href="https://github.com/Scheiber/saucesource"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-button">Read more</button>
          </a>
        </div>
      </article>
    </section>
    <section>
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

export default Portfolio;
