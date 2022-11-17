import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Affirmations from "./pages/Affirmations";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/affirmations" element={<Affirmations />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
