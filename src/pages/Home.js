import "./Home.css";

const Home = () => (
  <div className="home">
    <div className="tagline-box">
      <p className="tagline">Pursuit Fellow</p>
      <p className="tagline">Full-Stack Web Developer</p>
      <p className="tagline">CompTIA A+ Certified IT Professional</p>
      <p className="tagline">Cybersecurity Evangelist</p>
      <p className="tagline">Accessibility Advocate</p>
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
