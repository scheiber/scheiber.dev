import "./Home.css";

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
        <a href="/about">
          <button className="big-blue-button">About</button>
        </a>
        <a href="/portfolio">
          <button className="big-blue-button">Portfolio</button>
        </a>
      </div>
      <div>
        <a href="/gallery">
          <button className="big-blue-button">Gallery</button>
        </a>
        <a href="/now">
          <button className="big-blue-button">Now</button>
        </a>
      </div>
    </section>
  </div>
);

export default Home;
