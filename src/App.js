import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Now from "./pages/Now";
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

        {/* Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/now" element={<Now />} />

        {/* Internal Redirects */}
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/work" element={<Navigate to="/portfolio" />} />
        <Route path="/projects" element={<Navigate to="/portfolio" />} />

        {/* Internal Shortcuts */}
        <Route path="/a" element={<Navigate to="/about" />} />
        <Route path="/p" element={<Navigate to="/portfolio" />} />
        <Route path="/c" element={<Navigate to="/contact" />} />

        {/* External Redirects */}
        <Route path="/github" element={<GitHub />} />
        <Route path="/linkedin" element={<LinkedIn />} />
        <Route path="/resume" element={<Resume />} />

        {/* Side Projects */}
        <Route path="/affirmations" element={<Affirmations />} />
        <Route path="/motivator" element={<Motivator />} />

        {/* 404 Page */}
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

const Resume = () => {
  window.location.replace(
    "https://docs.google.com/document/d/1ZdYIX6EWmPrUtYYgePIHYFqvxWKvmTIo/edit"
  );
  return null;
};

export default App;
