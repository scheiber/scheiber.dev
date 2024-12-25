import "./Home.css";

const Home = () => (
  <div className="home">
    <div className="tagline-box">
      <div className="tagline">Pursuit Fellow</div>
      <div className="tagline">Full-Stack Web Developer</div>
      <div className="tagline">CompTIA A+ Certified IT Professional</div>
      <div className="tagline">Cybersecurity Evangelist</div>
      <div className="tagline">Accessibility Advocate</div>
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
