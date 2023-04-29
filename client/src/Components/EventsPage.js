import { useEffect, useRef } from "react";
import EventSlides from "./EventSlides";
import eventSlidesDataApi from "../apis/eventSlidesDataApi";
import eventListApi from "../apis/eventsListApi";
import EventListData from "./EventListData";
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
          &lt;
        </div>
        <div className="slideButton" id="slideNext">
          &gt;
        </div>
      </div>
      <div
        style={{
          // height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3>
          <center>Recent Events</center>
        </h3>
        <div className="recentEventContainer">
          <div className="recentEvent">Event1</div>
          <div className="recentEvent">Event2</div>
          <div className="recentEvent">Event3</div>
        </div>
        <div className="eventList">
          <h3>
            <center>All other past events</center>
          </h3>
          <div className="eventContainer">
            <div className="eventName">Contest Name</div>
            <div className="eventDateandTime">
              <div className="eventTime">Timing</div>
              <div className="eventDate">Date</div>
            </div>
          </div>
          {eventListApi.map((eventList) => {
            const { id, name, time, date } = eventList;
            return (
              <EventListData key={id} name={name} time={time} date={date} />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default EventsPage;
