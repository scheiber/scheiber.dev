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
        <div className="project-image worthashot-image">
          <a
            alt="Link to Worth a Shot"
            href="https://worthashot.scheiber.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="thumbnail"
              alt="Worth a Shot logo"
              src="./images/projects/worthashot.png"
            />
          </a>
        </div>
        <div>
          <p className="portfolio-description">
            In December 2022, I collaborated with a team of two other developers
            in the role of design/UX lead to create and deploy{" "}
            <a
              className="text-link"
              alt="Link to Worth a Shot"
              href="https://worthashot.scheiber.dev/"
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
            href="https://worthashot.scheiber.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-button">Visit website</button>
          </a>
          <a
            alt="Link to Worth a Shot on GitHub"
            href="https://github.com/scheiber/worthashot"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-button">Read more</button>
          </a>
          <a
            alt="Link to Worth a Shot Demo on YouTube"
            href="https://www.youtube.com/watch?v=HdrEIB6mWjU"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-button">Watch demo</button>
          </a>
        </div>
      </article>
      <article>
        <div className="saucesource-image project-image">
          <a
            alt="Link to SauceSource"
            href="https://saucesource.scheiber.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="thumbnail"
              alt="SauceSource logo"
              src="./images/projects/saucesource.png"
            />
          </a>
        </div>
        <p className="portfolio-description">
          In September 2022, I developed{" "}
          <a
            className="text-link"
            alt="Link to SauceSource"
            href="https://saucesource.scheiber.dev/"
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
            href="https://saucesource.scheiber.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="project-button">Visit website</button>
          </a>
          <a
            alt="Link to Worth a Shot on GitHub"
            href="https://github.com/scheiber/saucesource"
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
