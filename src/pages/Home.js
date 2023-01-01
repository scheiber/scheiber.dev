import "./Home.css";

const Home = () => (
  <div>
    <h1 className="name">Jonathan Scheiber</h1>
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
      <div>
        <a href="mailto:jonathan@scheiber.dev">
          <button className="big-blue-button">Contact me</button>
        </a>
      </div>
      <article>
        <a href="https://github.com/Scheiber" target="_blank" rel="noreferrer">
          <img
            className="icon"
            alt="GitHub"
            title="GitHub"
            src="./images/icons/github.png"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jonscheiber/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="icon"
            alt="LinkedIn"
            title="LinkedIn"
            src="./images/icons/linkedin.png"
          />
        </a>
      </article>
    </section>
  </div>
);

export default Home;
