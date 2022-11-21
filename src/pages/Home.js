import "./Home.css";

const Home = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="name">Jonathan Scheiber</h1>
      <h2 className="tagline">
        <p className="title">Pursuit Fellow</p>
        <p className="title">Full-Stack Web Developer</p>
        <p className="title">CompTIA A+ Certified IT Professional</p>
        <p className="title">Cybersecurity Evangelist</p>
        <p className="title">Accessibility Advocate</p>
      </h2>
      <a className="link" href="https://www.linkedin.com/in/jonscheiber">
        LinkedIn
      </a>
      <a className="link" href="https://github.com/scheiber">
        GitHub
      </a>
      <a rel="me" className="link" href="https://qoto.org/@jon">
        Mastodon
      </a>
    </header>
  </div>
);

export default Home;
