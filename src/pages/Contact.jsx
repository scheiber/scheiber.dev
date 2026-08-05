import "./Contact.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Contact = () => (
  <div className="contact">
    <Helmet>
      <title>Jonathan Scheiber | Contact</title>
    </Helmet>
    <h2 className="title">Contact</h2>
    <div className="contact-text">
      <p>
        Want to get in touch? Email me at{" "}
        <a className="text-link" href="mailto:jonathan@scheiber.dev">
          jonathan@scheiber.dev
        </a>{" "}
        and feel free to <strong>introduce yourself</strong>.
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
        <Link className="big-button" to="/portfolio">
          Portfolio
        </Link>
      </div>
    </section>
  </div>
);

export default Contact;
