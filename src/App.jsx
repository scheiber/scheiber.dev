import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Now from "./pages/Now";
import Uses from "./pages/Uses";
import Affirmations from "./pages/Affirmations";
import Motivator from "./pages/Motivator";
import Error from "./pages/Error";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NavDrawer from "./components/NavDrawer";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jonathan Scheiber",
  url: "https://scheiber.dev/",
  image: "https://scheiber.dev/images/headshot.jpg",
  jobTitle: "Full-Stack Web Developer",
  description:
    "Full-stack web developer, Pursuit fellow, CompTIA A+ certified IT professional, cybersecurity evangelist, and accessibility advocate.",
  sameAs: [
    "https://github.com/scheiber",
    "https://www.linkedin.com/in/jonscheiber/",
    "https://bsky.app/profile/scheiber.dev",
    "https://qoto.org/@jon",
    "https://letterboxd.com/js/",
    "https://www.last.fm/user/JonScheiber",
    "https://www.goodreads.com/scheiber",
  ],
};

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);
  return (
    <div className="app" data-aos="fade-down">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollToTop />
      <NavDrawer />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/now" element={<Now />} />
          <Route path="/uses" element={<Uses />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* Internal Redirects */}
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/work" element={<Navigate to="/portfolio" />} />
          <Route path="/projects" element={<Navigate to="/portfolio" />} />
          {/* Internal Shortcuts */}
          <Route path="/a" element={<Navigate to="/about" />} />
          <Route path="/p" element={<Navigate to="/portfolio" />} />
          <Route path="/w" element={<Navigate to="/portfolio" />} />
          <Route path="/n" element={<Navigate to="/now" />} />
          <Route path="/u" element={<Navigate to="/uses" />} />
          <Route path="/g" element={<Navigate to="/gallery" />} />
          <Route path="/c" element={<Navigate to="/contact" />} />
          {/* External Redirects */}
          <Route path="/github" element={<GitHub />} />
          <Route path="/gh" element={<GitHub />} />
          <Route path="/linkedin" element={<LinkedIn />} />
          <Route path="/li" element={<LinkedIn />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/r" element={<Resume />} />
          {/* Side Projects */}
          <Route path="/affirmations" element={<Affirmations />} />
          <Route path="/motivator" element={<Motivator />} />
          {/* 404 Page */}
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
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
