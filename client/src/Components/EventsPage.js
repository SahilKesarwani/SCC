import { useEffect, useRef } from "react";
import EventSlides from "./EventSlides";
import eventSlidesDataApi from "../apis/eventSlidesDataApi";
const EventsPage = ({ navbar, title }) => {
  const outsideNavArea = useRef("");
  const slideShowContainer = useRef("");
  const applyStyling = () => {
    const navbarHeight = navbar.current.offsetHeight;
    outsideNavArea.current.style.paddingTop = navbarHeight + "px";
    slideShowContainer.current.style.height =
      window.innerHeight - navbarHeight + "px";
  };
  let slideIndex = -1;
  let checkSlidePass = 1;
  const slideShow = (n) => {
    let slides = document.querySelectorAll(".slides");
    slideIndex = slideIndex + n;
    Array.from(slides).forEach((e) => {
      e.style.width = "0";
    });
    if (slideIndex > slides.length) slideIndex = 1;
    else if (slideIndex <= 0) slideIndex = slides.length;
    slides[slideIndex - 1].style.width = "100vw";
  };
  const nextSlide = () => {
    if (checkSlidePass == 1) {
      slideShow(1);
    }
    setTimeout(nextSlide, 2000);
  };
  useEffect(() => {
    applyStyling();
    let prev = document.getElementById("slidePrev");
    let next = document.getElementById("slideNext");
    prev.addEventListener("click", () => {
      slideShow(-1);
    });
    next.addEventListener("click", () => {
      slideShow(1);
    });
    next.click();
    nextSlide();
    slideShowContainer.current.addEventListener("mouseover", () => {
      checkSlidePass = 0;
    });
    slideShowContainer.current.addEventListener("mouseout", () => {
      checkSlidePass = 1;
    });
  }, []);
  return (
    <>
      <div ref={outsideNavArea}></div>
      {/* <div>Hello World, I'm a {title}</div> */}
      <div className="slideShowContainer" ref={slideShowContainer}>
        {eventSlidesDataApi.map((slides) => {
          const { id, slideText } = slides;
          return <EventSlides key={id} navbar={navbar} slideText={slideText} />;
        })}
        <div className="slideButton" id="slidePrev">
          Prev
        </div>
        <div className="slideButton" id="slideNext">
          Next
        </div>
      </div>
      <div style={{height:"100vh", width:"100vw"}}>Yo</div>
    </>
  );
};
export default EventsPage;
