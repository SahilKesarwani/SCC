import { Link } from "react-router-dom";
import eventsListApi from "../apis/eventsListApi";

export default function EventPage() {
  return (
    <>
      <div className="eventStarting">
        <div className="overlay"></div>
        <div className="startingTextBox">
          <div className="startingText">
            <div className="date">
              <i className="i_h3 fa fa-calendar-check-o id-color"></i>
              <p>16 Feb </p>
            </div>
            <div className="participant">
              <i className="i_h3 fa fa-user id-color"></i>
              <p>150+ Registration</p>
            </div>
            <div className="location">
              <i className="i_h3 fa fa-map-marker id-color"></i>
              <p>Coding Ninjas</p>
            </div>
          </div>
          <div className="upcomingEventName">
            <p>HACKVERSE</p>
          </div>
          <Link to="/eventPages/hackverse1">
            <div className="button">CLICK ME</div>
          </Link>
        </div>
        <div className="illustrationBox">
          <div className="illustrationShape">
            <img src="../images/picture.png" />
          </div>
        </div>
      </div>
      <div className="recentEvents">
        <h1 className="recentEventHeadBg">HACKVERSE</h1>
        <div className="recentEventText">
          <h1>HackVerse</h1>
          <p>
            Hackathon contests are dynamic and exhilarating events that bring
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
            technological advancement.
          </p>
          <button>CLICK ME</button>
        </div>
        <div className="recentEventImages">
          <img src="https://www.madebydesignesia.com/themes/exhibiz/images/misc/1.jpg" />
          <img src="https://www.madebydesignesia.com/themes/exhibiz/images/misc/3.jpg" />
          <img src="https://www.madebydesignesia.com/themes/exhibiz/images/misc/2.jpg" />
        </div>
      </div>

      <div className="eventListBox">
        <h1 className="pastEventHeading">Past Events</h1>
        {/* <div className="eventList">
          <div className="pastEventDate">
            <p>22jan2023</p>
            <p>8-10pm</p>
          </div>
          <div className="pastEventDescription">
            <h1>Hackverse</h1>
            <p>
              Lorem ipsum dolor, sit amet Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quasi, aliquam quaerat libero, error
              nesciunt quas a possimus itaque beatae alias vitae doloremque, ea
              eius maxime aliquid illum. Perspiciatis, harum quasi?
            </p>
          </div>
        </div> */}
        {eventsListApi.map((eventDetails) => {
          const { id, name, time, date, description } = eventDetails;
          return (
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
          );
        })}
      </div>
    </>
  );
}
