import { useRef, useEffect } from "react";

function InvertFlashImage({ src, alt }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (!isTouchDevice) return;

    const handleTap = () => {
      img.classList.add("tap-active");
    };

    const handleAnimationEnd = () => {
      img.classList.remove("tap-active");
    };

    img.addEventListener("touchstart", handleTap);
    img.addEventListener("animationend", handleAnimationEnd);

    return () => {
      img.removeEventListener("touchstart", handleTap);
      img.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return <img ref={imgRef} src={src} alt={alt} className="invert-flash" />;
}

export default InvertFlashImage;
