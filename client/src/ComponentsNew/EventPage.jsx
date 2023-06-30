import { Link } from "react-router-dom";
import eventsListApi from "../apis/eventsListApi";
import { useEffect, useRef, useState } from "react";

export default function EventPage() {
  const [isrecentEvents_div_vis, setrecentEvents_div_vis] = useState(false);
  const [ish1_scale, seth1_scale] = useState(false);
  useEffect(() => {
    // document.body.style.backgroundColor = "black";
    window.addEventListener("scroll", () => {
      setrecentEvents_div_vis(true);
      seth1_scale(true);
    });
  });
  return (
    <div style={{ background: "black" }}>
      <div className="eventStarting">
        <div className="overlay"></div>
        <div className="startingTextBox">
          <div className="startingText">
            <div className="date">
              <i className="i_h3 fa fa-calendar-check-o id-color"></i>
              <p>{eventsListApi[0].date}</p>
            </div>
            <div className="participant">
              <i className="i_h3 fa fa-user id-color"></i>
              <p>{eventsListApi[0].registrations}+ Registrations</p>
            </div>
            <div className="location">
              <i className="i_h3 fa fa-map-marker id-color"></i>
              <p>{eventsListApi[0].sponsors}</p>
            </div>
          </div>
          <div className="upcomingEventName">
            <p>{eventsListApi[0].name.toUpperCase()}</p>
          </div>

          <button className="recentEvents_button">
            <Link to="/eventPages/hackverse1">CLICK ME</Link>
          </button>
        </div>
        <div className="illustrationBox">
          <div className="illustrationShape">
            <img src="../images/picture.png" />
          </div>
        </div>
      </div>
      <div
        className={`recentEvents  recentEvents_div ${
          isrecentEvents_div_vis ? "recentEvents_div_vis" : ""
        }`}
      >
        <h1 className={`recentEventHeadBg ${ish1_scale ? "h1_scale" : ""}`}>
          {eventsListApi[1].name.toUpperCase()}
        </h1>
        <div className="recentEventText">
          <h1>
            {eventsListApi[1].name[0].toUpperCase() +
              eventsListApi[1].name.slice(1)}
          </h1>
          <p>
            {/* Hackathon contests are dynamic and exhilarating events that bring
            together passionate individuals to collaborate, innovate, and solve
            complex problems in a limited timeframe. These intensive
            competitions foster creativity, teamwork, and out-of-the-box
            thinking, making them an ideal platform for aspiring coders,
            designers, and entrepreneurs to showcase their skills. Participants
            immerse themselves in a high-pressure environment, leveraging their
            technical expertise to develop cutting-edge software, apps, or
            hardware solutions. Hackathons provide a unique opportunity for
            networking, mentorship, and exposure to industry professionals. With
            a focus on rapid prototyping and experimentation, these contests
            fuel the spirit of innovation and push the boundaries of
            technological advancement. */}
            {eventsListApi[1].description}
          </p>
          <button className="recentEvents_button">
            <Link to="/eventPages/hackverse2">CLICK ME</Link>
          </button>
        </div>
        <div className="recentEventImages">
          <img src="https://www.madebydesignesia.com/themes/exhibiz/images/misc/1.jpg" />
          <img src="https://www.madebydesignesia.com/themes/exhibiz/images/misc/3.jpg" />
          <img src="https://www.madebydesignesia.com/themes/exhibiz/images/misc/2.jpg" />
        </div>
      </div>

      <div className="eventListBox">
        <h1 className="pastEventHeading">Past Events</h1>

        {eventsListApi.map((eventDetails) => {
          const { id, name, time, date, description } = eventDetails;
          return (
            <Link to={`/eventPages/${name}`} key={id}>
              <div className="list">
                <div className="dateTime">
                  <div> {date}</div>
                  <div> {time}</div>
                </div>
                <div className="eventDescription">
                  <h1> {name}</h1>
                  <div>
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
