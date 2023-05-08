import "./Gallery.css";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Gallery from "react-photo-gallery";

const backgrounds = [
  {
    src: "/images/backgrounds/Jonathan_Scheiber_Instructor_Appreciation_Week_2022_Black.png",
    width: 480,
    height: 270,
    className: "tile",
  },
  {
    src: "/images/backgrounds/Jonathan_Scheiber_Instructor_Appreciation_Week_2022_Blue.png",
    width: 480,
    height: 270,
    className: "tile",
  },
  {
    src: "/images/backgrounds/Jonathan_Scheiber_Instructor_Appreciation_Week_2022_Gray.png",
    width: 480,
    height: 270,
    className: "tile",
  },
  {
    src: "/images/backgrounds/Jonathan_Scheiber_Instructor_Appreciation_Week_2023_Black.png",
    width: 480,
    height: 270,
    className: "tile",
  },
  {
    src: "/images/backgrounds/Jonathan_Scheiber_Instructor_Appreciation_Week_2023_Blue.png",
    width: 480,
    height: 270,
    className: "tile",
  },
  {
    src: "/images/backgrounds/Jonathan_Scheiber_Instructor_Appreciation_Week_2023_Gray.png",
    width: 480,
    height: 270,
    className: "tile",
  },
  {
    src: "/images/backgrounds/Jonathan_Scheiber_Pursuit_AAPI.png",
    width: 480,
    height: 270,
    className: "tile",
  },
  {
    src: "/images/backgrounds/Jonathan_Scheiber_Pursuit_Latin_Heritage_Month_EN.png",
    width: 480,
    height: 270,
    className: "tile",
  },
  {
    src: "/images/backgrounds/Jonathan_Scheiber_Pursuit_Latin_Heritage_Month_ES.png",
    width: 480,
    height: 270,
    className: "tile",
  },
  {
    src: "/images/backgrounds/Jonathan_Scheiber_Pursuit_Black_History_Month.png",
    width: 480,
    height: 270,
    className: "tile",
  },
  {
    src: "/images/backgrounds/Jonathan_Scheiber_Pursuit_Pride.png",
    width: 480,
    height: 270,
    className: "tile",
  },
];

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
        during the course of my career. Click the images below to open them in a
        new tab.
      </p>
    </div>
    <div className="gallery-grid">
      {" "}
      <Gallery photos={backgrounds} onClick={onClick} />
    </div>
  </div>
);

export default GalleryDisplay;
