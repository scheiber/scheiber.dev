import "./Gallery.css";
import { Helmet } from "react-helmet-async";
import backgrounds from "./Backgrounds";

const GalleryDisplay = () => (
  <div className="gallery">
    <Helmet>
      <title>Jonathan Scheiber | Gallery</title>
    </Helmet>
    <h2 className="title">Gallery</h2>
    <div className="now-text">
      <p>
        This is a collection of graphics and illustrations that I have created
        over the course of my career.
        <br /> Click the images below to open a larger version in a new tab, or
        right-click to save.
      </p>
    </div>
    <div className="photo-grid">
      {backgrounds.map((photo) => (
        <a key={photo.src} href={photo.src} target="_blank" rel="noreferrer">
          <img
            className="tile"
            src={photo.thumb}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
          />
        </a>
      ))}
    </div>
  </div>
);

export default GalleryDisplay;
