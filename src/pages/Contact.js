import "./Contact.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const About = () => (
  <div className="contact">
    <HelmetProvider>
      <Helmet>
        <title>Jonathan Scheiber | Contact</title>
      </Helmet>
    </HelmetProvider>
    <h1 className="title">Contact</h1>
    <div className="contact-text">
      <p>
        Want to get in touch? Email me at{" "}
        <a href="mailto:jonathan@scheiber.dev">jonathan@scheiber.dev</a> and
        feel free to <strong>introduce yourself</strong>.
      </p>
      <p>
        I love getting to know people from around the world and in every
        industry.
      </p>
      <p>
        There's no need to ask a question, simply tell me where you are and what
        you're working on.
      </p>
      <p>
        <strong>I try to reply to all.</strong>
      </p>
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
