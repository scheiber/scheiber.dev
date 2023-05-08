import "./Gallery.css";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Gallery from "react-photo-gallery";
import backgrounds from "./Backgrounds";

const onClick = (event) => {
  window.open(event.target.src, "_blank");
};

const GalleryDisplay = () => (
  <div className="gallery">
    <HelmetProvider>
      <Helmet>
        <title>Jonathan Scheiber | Gallery</title>
      </Helmet>
    </HelmetProvider>
    <h1 className="title">Gallery</h1>
    <div className="now-text">
      <p>
        This is a collection of graphics and illustrations that I have created
        over the course of my career.
        <br /> Click the images below to open a larger version in a new tab, or
        right-click to save.
      </p>
    </div>
    <div className="gallery-grid">
      {" "}
      <Gallery photos={backgrounds} onClick={onClick} />
    </div>
  </div>
);

export default GalleryDisplay;
