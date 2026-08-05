import { useRef, useState } from "react";
import "./Gallery.css";
import { Helmet } from "react-helmet-async";
import backgrounds from "./Backgrounds";
import Lightbox from "../components/Lightbox";

const GalleryDisplay = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const tileRefs = useRef([]);
  const openedFromIndex = useRef(null);

  const openLightbox = (index) => {
    openedFromIndex.current = index;
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
    tileRefs.current[openedFromIndex.current]?.focus();
  };

  return (
    <div className="gallery">
      <Helmet>
        <title>Jonathan Scheiber | Gallery</title>
      </Helmet>
      <h2 className="title">Gallery</h2>
      <div className="now-text">
        <p>
          This is a collection of graphics and illustrations that I have
          created over the course of my career.
          <br /> Click an image to view it full-size, then download it or
          open the original in a new tab.
        </p>
      </div>
      <div className="photo-grid">
        {backgrounds.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            ref={(el) => (tileRefs.current[index] = el)}
            className="tile-button"
            onClick={() => openLightbox(index)}
          >
            <img
              className="tile"
              src={photo.thumb}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
      {activeIndex !== null && (
        <Lightbox
          images={backgrounds}
          index={activeIndex}
          onClose={closeLightbox}
          onNavigate={setActiveIndex}
        />
      )}
    </div>
  );
};

export default GalleryDisplay;
