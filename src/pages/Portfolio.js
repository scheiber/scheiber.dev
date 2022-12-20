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
        <a
          alt="Link to Worth a Shot on GitHub"
          href="https://github.com/Scheiber/worthashot"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="link">GitHub</h3>
        </a>
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
            alt="Worth a Shot logo"
            src="./images/thumbnails/saucesource.png"
          />
        </a>
        <a
          alt="Link to Worth a Shot on GitHub"
          href="https://github.com/Scheiber/saucesource"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="link">GitHub</h3>
        </a>
      </article>
    </section>
  </div>
);

export default Portfolio;
