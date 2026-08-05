import "./Portfolio.css";
import { Helmet } from "react-helmet-async";

const Portfolio = () => (
  <div className="portfolio">
    <Helmet>
      <title>Jonathan Scheiber | Portfolio</title>
    </Helmet>
    <h2 className="title">Portfolio</h2>
    <section className="portfolio-grid">
      <article>
        <div className="project-image tzcatalogue-image">
          <a href="https://tz.scheiber.dev/" target="_blank" rel="noreferrer">
            <img
              className="thumbnail"
              alt="Twilight Zone Catalogue preview"
              src="./images/projects/tzcatalogue.png"
            />
          </a>
        </div>
        <div>
          <p className="portfolio-description">
            In April 2026, I created{" "}
            <a
              className="text-link"
              href="https://tz.scheiber.dev/"
              target="_blank"
              rel="noreferrer"
            >
              The Twilight Zone Catalogue
            </a>
            , a web application for exploring the classic television series "The
            Twilight Zone." The site is a complete interactive catalogue of the
            classic original series that allows users to browse, search, filter,
            and track all 156 episodes across five seasons from 1959 to 1964. I
            was responsible for creating graphic and layout elements, branding,
            writing documentation, implementing features, optimizing for mobile,
            and enhancing user experience.
          </p>
        </div>
        <div>
          <a
            className="project-button"
            aria-label="Visit The Twilight Zone Catalogue website"
            href="https://tz.scheiber.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Visit website
          </a>
          <a
            className="project-button"
            aria-label="Read more about The Twilight Zone Catalogue on GitHub"
            href="https://github.com/scheiber/twilight-zone-catalogue"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
      </article>
      <article>
        <div className="project-image resultsfixer-image">
          <a
            href="https://fixer.scheiber.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="thumbnail"
              alt="ResultsFixer preview"
              src="./images/projects/resultsfixer.png"
            />
          </a>
        </div>
        <div>
          <p className="portfolio-description">
            In August 2024, I created{" "}
            <a
              className="text-link"
              href="https://fixer.scheiber.dev/"
              target="_blank"
              rel="noreferrer"
            >
              ResultsFixer
            </a>
            , a web app that allows you to copy your results from games such as
            Connections and Strands and have two spaces automatically added to
            the end of each line, making the lines appear "stacked" when sharing
            on platforms that use Markdown, such as Reddit and Lemmy. I was
            solely responsible for creating graphic and layout elements,
            branding, writing documentation, implementing features, optimizing
            for mobile, and enhancing user experience.
          </p>
        </div>
        <div>
          <a
            className="project-button"
            aria-label="Visit ResultsFixer website"
            href="https://fixer.scheiber.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Visit website
          </a>
          <a
            className="project-button"
            aria-label="Read more about ResultsFixer on GitHub"
            href="https://github.com/scheiber/connections-results-fixer"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
      </article>
      <article>
        <div className="project-image worthashot-image">
          <a
            href="https://worthashot.scheiber.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="thumbnail"
              alt="Worth a Shot preview"
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
            className="project-button"
            aria-label="Visit Worth a Shot website"
            href="https://worthashot.scheiber.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Visit website
          </a>
          <a
            className="project-button"
            aria-label="Read more about Worth a Shot on GitHub"
            href="https://github.com/scheiber/worthashot"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
          <a
            className="project-button"
            aria-label="Watch the Worth a Shot demo on YouTube"
            href="https://www.youtube.com/watch?v=HdrEIB6mWjU"
            target="_blank"
            rel="noreferrer"
          >
            Watch demo
          </a>
        </div>
      </article>
      <article className="center-item">
        <div className="saucesource-image project-image">
          <a
            href="https://saucesource.scheiber.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="thumbnail"
              alt="SauceSource preview"
              src="./images/projects/saucesource.png"
            />
          </a>
        </div>
        <p className="portfolio-description">
          In September 2022, I developed{" "}
          <a
            className="text-link"
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
            className="project-button"
            aria-label="Visit SauceSource website"
            href="https://saucesource.scheiber.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Visit website
          </a>
          <a
            className="project-button"
            aria-label="Read more about SauceSource on GitHub"
            href="https://github.com/scheiber/saucesource"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
      </article>
    </section>
  </div>
);

export default Portfolio;
