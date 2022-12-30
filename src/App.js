import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Affirmations from "./pages/Affirmations";
import Motivator from "./pages/Motivator";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/affirmations" element={<Affirmations />} />
          <Route path="/motivator" element={<Motivator />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
