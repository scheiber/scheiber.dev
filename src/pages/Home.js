import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home">
    <div className="headline-box">
      <div className="headline">Pursuit Fellow</div>
      <div className="headline">Full-Stack Web Developer</div>
      <div className="headline">
        Google IT Support/CompTIA A+ Dual Certified
      </div>
      <div className="headline">Cybersecurity Evangelist</div>
      <div className="headline">Accessibility Advocate</div>
    </div>
    <section className="links">
      <div>
        <Link className="big-button" to="/about">
          About
        </Link>
        <Link className="big-button" to="/portfolio">
          Portfolio
        </Link>
      </div>
      <div>
        <Link className="big-button" to="/gallery">
          Gallery
        </Link>
        <Link className="big-button" to="/now">
          Now
        </Link>
      </div>
    </section>
  </div>
);

export default Home;
