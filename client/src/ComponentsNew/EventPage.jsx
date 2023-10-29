import { Link } from "react-router-dom";
import eventsListApi from "../apis/eventsListApi";
import { useEffect, useState } from "react";
import currentEventApi from "../apis/currentEventApi";

export default function EventPage({ navbar }) {
  useEffect(() => {
    const navBar = navbar.current;
    const childElement1 = document.body.children[1].children[1].children[0];
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isrecentEvents_div_vis, setrecentEvents_div_vis] = useState(false);
  const [ish1_scale, seth1_scale] = useState(false);
  const [secondEventAvail, setSecondEventAvail] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setrecentEvents_div_vis(true);
      seth1_scale(true);
    });
    if (eventsListApi.length > 1) {
      setSecondEventAvail(true);
    }
  }, []);
  return (
    <div style={{ background: "black" }}>
      <section id="banner">
        <div
          className="banner-item bg-overlay"
          style={{
            backgroundImage:
              "url(https://demo.themewinter.com/html/eventor/images/hero-area/bg-main.jpg)",
          }}
        >
          <div className="container">
            <div className="banner-content text-center">
              <div className="banner-content-wrap">
                <div className="countdown bg-style">
                  <div className="counter-day">
                    <span className="days">--</span>
                    <div className="smalltext">Days</div>
                  </div>
                  <div className="counter-hour">
                    <span className="hours">--</span>
                    <div className="smalltext">Hours</div>
                  </div>
                  <div className="counter-minute">
                    <span className="minutes">--</span>
                    <div className="smalltext">Minutes</div>
                  </div>
                  <div className="counter-second">
                    <span className="seconds">--</span>
                    <div className="smalltext">Seconds</div>
                  </div>
                </div>
                <h1 className="banner-title">{currentEventApi[0].name}</h1>
                <h2 className="banner-subtitle">
                  {currentEventApi[0].date} - {currentEventApi[0].time}
                </h2>
                <h3 className="banner-desc">{currentEventApi[0].venue}</h3>
                <p className="banner-btn1">
                  <a href="www.google.com" className="btn1 btn-primary">
                    Register Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {secondEventAvail && (
        <div
          className={`recentEvents  recentEvents_div ${
            isrecentEvents_div_vis ? "recentEvents_div_vis" : ""
          }`}
        >
          <h1 className={`recentEventHeadBg ${ish1_scale ? "h1_scale" : ""}`}>
            {eventsListApi[eventsListApi.length - 1].name.toUpperCase()}
          </h1>
          <div className="recentEventText">
            <h1>
              {eventsListApi[eventsListApi.length - 1].name[0].toUpperCase() +
                eventsListApi[eventsListApi.length - 1].name.slice(1)}
            </h1>
            <p>{eventsListApi[eventsListApi.length - 1].description}</p>
            <Link
              to={`/eventpage/${eventsListApi[eventsListApi.length - 1].name}`}
            >
              <button className="recentEvents_button">CLICK ME</button>
            </Link>
          </div>
          <div className="recentEventImages">
            <img
              alt=""
              src="https://www.madebydesignesia.com/themes/exhibiz/images/misc/1.jpg"
            />
            <img
              alt=""
              src="https://www.madebydesignesia.com/themes/exhibiz/images/misc/3.jpg"
            />
            <img
              alt=""
              src="https://www.madebydesignesia.com/themes/exhibiz/images/misc/2.jpg"
            />
          </div>
        </div>
      )}

      <div className="eventListBox">
        <h1 className="pastEventHeading">Past Events</h1>

        {eventsListApi.reverse().map((eventDetails) => {
          const { id, name, time, date, description } = eventDetails;
          return (
            <Link to={`/eventpage/${name}`} key={id}>
              <div className="list">
                <div className="dateTime">
                  <div> {date}</div>
                  <div> {time}</div>
                </div>
                <div className="eventDescription">
                  <h1> {name}</h1>
                  <div className="eventSubDescription">
                    {description ? description.slice(0, 250) + "..." : ""}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
