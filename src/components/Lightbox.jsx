import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./Lightbox.css";

const Lightbox = ({ images, index, onClose, onNavigate }) => {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const photo = images[index];
  const filename = photo.src.split("/").pop();

  const goPrev = () => onNavigate((index - 1 + images.length) % images.length);
  const goNext = () => onNavigate((index + 1) % images.length);

  useEffect(() => {
    setLoaded(false);
  }, [index]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowLeft") {
        goPrev();
        return;
      }
      if (event.key === "ArrowRight") {
        goNext();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = dialogRef.current?.querySelectorAll("button, a[href]");
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, images.length]);

  return createPortal(
    <div className="lightbox-overlay" onClick={onClose}>
      <div
        className="lightbox"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={photo.alt}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="lightbox-close"
          aria-label="Close"
          onClick={onClose}
        >
          &times;
        </button>

        <button
          type="button"
          className="lightbox-nav lightbox-prev"
          aria-label="Previous image"
          onClick={goPrev}
        >
          &#8249;
        </button>

        <div className="lightbox-figure">
          {!loaded && (
            <img
              className="lightbox-placeholder"
              src={photo.thumb}
              alt=""
              aria-hidden="true"
            />
          )}
          <img
            className={`lightbox-image${loaded ? " lightbox-image-loaded" : ""}`}
            src={photo.src}
            alt={photo.alt}
            onLoad={() => setLoaded(true)}
          />
        </div>

        <button
          type="button"
          className="lightbox-nav lightbox-next"
          aria-label="Next image"
          onClick={goNext}
        >
          &#8250;
        </button>

        <div className="lightbox-toolbar">
          <span className="lightbox-count">
            {index + 1} of {images.length}
          </span>
          <a className="lightbox-action" href={photo.src} download={filename}>
            Download
          </a>
          <a
            className="lightbox-action"
            href={photo.src}
            target="_blank"
            rel="noreferrer"
          >
            Open original
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Lightbox;
