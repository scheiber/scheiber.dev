import "./Contact.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const About = () => (
  <div className="now">
    <HelmetProvider>
      <Helmet>
        <title>Jonathan Scheiber | Contact</title>
      </Helmet>
    </HelmetProvider>
    <h1 className="title">Now</h1>
    <div className="now-text">
      <p>Coming soon.</p>
    </div>
    <section>
      <div>
        <a href="/portfolio">
          <button className="big-blue-button">See my work</button>
        </a>
      </div>
    </section>
  </div>
);

export default About;
