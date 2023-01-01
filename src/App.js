import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Affirmations from "./pages/Affirmations";
import Motivator from "./pages/Motivator";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="app" data-aos="fade-down">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/work" element={<Navigate to="/portfolio" />} />
        <Route path="/projects" element={<Navigate to="/portfolio" />} />
        <Route path="/github" element={<GitHub />} />
        <Route path="/linkedin" element={<LinkedIn />} />
        <Route path="/affirmations" element={<Affirmations />} />
        <Route path="/motivator" element={<Motivator />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

const LinkedIn = () => {
  window.location.replace("https://www.linkedin.com/in/jonscheiber/");
  return null;
};

const GitHub = () => {
  window.location.replace("https://github.com/scheiber");
  return null;
};

export default App;
