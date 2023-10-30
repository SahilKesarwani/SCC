import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Contents from "./Contents";
import CarouselArea from "./CarouselArea";
import currentEventApi from "../apis/currentEventApi";

export default function HomePage({ navbar }) {
  useEffect(() => {
    const navBar = navbar.current;
    const childElement1 = document.body.children[1].children[1];
    window.addEventListener("scroll", () => {
      if (
        childElement1 != null &&
        childElement1.getBoundingClientRect().bottom <= navBar.clientHeight
      ) {
        navBar.style.backdropFilter = "blur(10px)";
        // navBar.style.backdropFilter = "";
      } else {
        navBar.style.backdropFilter = "";
      }
    });
  });
  const [popUp, setPopUp] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    let dte = new Date(currentEventApi[0].date);
    console.log(dte);
    let currDate = new Date();
    if (dte - currDate <= 0) {
      setPopUp(false);
    }
  }, []);

  return (
    <>
      {currentEventApi[0] && popUp && (
        <div className="alertEvent">
          <div className="alertEventHeading">
            <h3>Upcoming Event !!</h3>
          </div>

          <p className="paraOne">
            <b>Name:</b> {currentEventApi[0].name}
          </p>
          <p className="paraOne">
            <b>Timings:</b> {currentEventApi[0].date.replace("T", " ")}
          </p>
          <p className="paraOne">
            <b>Platform:</b> {currentEventApi[0].venue}
          </p>
          <div style={{ width: "100%", textAlign: "center" }}>
            <a
              href="/eventpage"
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-block" }}
            >
              <div className="kokol1">KNOW MORE</div>
            </a>
          </div>
        </div>
      )}
      <Contents />
      <CarouselArea />
    </>
  );
}
