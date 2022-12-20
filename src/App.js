import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Affirmations from "./pages/Affirmations";
import Motivator from "./pages/Motivator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/affirmations" element={<Affirmations />} />
          <Route path="/motivator" element={<Motivator />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
