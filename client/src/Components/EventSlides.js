import { useEffect, useRef } from "react";
const EventSlides = ({ navbar, slideText, imgSrc }) => {
  const slides = useRef("");
  const applyStyling = () => {
    const navbarHeight = navbar.current.offsetHeight;
    slides.current.style.height = window.innerHeight - navbarHeight + "px";
  };
  useEffect(() => {
    applyStyling();
  }, []);
  return (
    <>
      <div className="slides" ref={slides}>
        {/* {slideText} */}
        <img src={imgSrc}/>
      </div>

    </>
  );
};
export default EventSlides;
