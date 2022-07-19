import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jonathan Scheiber</h1>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/jonscheiber"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://github.com/scheiber"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
