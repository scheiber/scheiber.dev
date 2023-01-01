import "./Home.css";

const Home = () => (
  <div>
    <h2 className="tagline">
      <p className="title">Pursuit Fellow</p>
      <p className="title">Full-Stack Web Developer</p>
      <p className="title">CompTIA A+ Certified IT Professional</p>
      <p className="title">Cybersecurity Evangelist</p>
      <p className="title">Accessibility Advocate</p>
    </h2>
    <section className="links">
      <div>
        <a href="/about">
          <button className="big-blue-button">Read more</button>
        </a>
      </div>
      <div>
        <a href="/portfolio">
          <button className="big-blue-button">See my work</button>
        </a>
      </div>
    </section>
  </div>
);

export default Home;
