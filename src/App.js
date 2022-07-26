import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jonathan Scheiber</h1>
        <h2 className="tagline">
          Pursuit Fellow
          <br />
          Full-Stack Web Developer
          <br />
          CompTIA A+ Certified IT Professional
          <br />
          Cybersecurity Evangelist
          <br />
          Accessibility Advocate
        </h2>
        <a className="link" href="https://www.linkedin.com/in/jonscheiber">
          LinkedIn
        </a>
        <a className="link" href="https://github.com/scheiber">
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
