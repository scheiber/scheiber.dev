import "./Portfolio.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Portfolio = () => (
  <div className="portfolio">
    <HelmetProvider>
      <Helmet>
        <title>Jonathan Scheiber | Portfolio</title>
      </Helmet>
    </HelmetProvider>
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
            src="./images/projects/worthashot.png"
          />
        </a>
        <div>
          <p className="portfolio-description">
            In December 2022, I collaborated with a team of two other developers
            in the role of design/UX lead to create and deploy{" "}
            <a
              alt="Link to Worth a Shot"
              href="http://wshot.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Worth a Shot
            </a>
            , a web app that finds nightlife establishments and recommends
            drinks with a React-based frontend, an Express-based backend, a
            PostgreSQL database, and integration with the Yelp Fusion API. I was
            responsible for creating graphic and layout elements, branding,
            writing documentation, implementing accessibility features,
            optimizing for mobile, and enhancing user experience.
          </p>
        </div>
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
            src="./images/projects/saucesource.png"
          />
        </a>
        <p className="portfolio-description">
          In September 2022, I developed{" "}
          <a
            alt="Link to SauceSource"
            href="http://saucesource.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            SauceSource
          </a>
          , a hot sauce reference catalog app with a React-based frontend, an
          Express-based backend, and a PostgreSQL database. I was responsible
          for project management, creating graphic and layout elements,
          branding, front-end and back-end, documentation, optimizing user
          experience, and deployment.
        </p>
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
  </div>
);

export default Portfolio;
