import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import eventsListApi from "../apis/eventsListApi";
import { v4 as uuid } from "uuid";

export default function ParticularEventPage({ navbar }) {
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { eventName } = useParams();

  return (
    <>
      {eventsListApi.map((events) => {
        const {
          id,
          name,
          time,
          date,
          registrations,
          description,
          imageURL,
          totalParticipants,
          sponsors,
          winners,
          examiners,
        } = events;
        if (eventName === name) {
          return (
            <div key={id}>
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

                        <h1 className="banner-title">{name}</h1>
                        <h2 className="banner-subtitle">
                          {date} - {time}
                        </h2>
                        <h3 className="banner-desc">{events.platform}</h3>
                        <p className="banner-btn1">
                          <a
                            href="https://www.google.com/"
                            className="btn1 btn-primary disableAnchor"
                          >
                            Event Ended
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="pedesc">
                <div className="pedescContainer">
                  <div className="pedescSubContainer">
                    <h2
                      style={{
                        fontSize: "18px",
                        lineHeight: "28px",
                        fontWeight: "500",
                        margin: "0",
                        color: "#ff0763",
                        fontFamily: "'Roboto', sans-serif",
                      }}
                    >
                      About the Event
                    </h2>
                    <h3
                      style={{
                        fontWeight: "900px",
                        fontSize: "36px",
                        lineHeight: "46px",
                        margin: "0 0 60px",
                        marginBottom: "10px",
                        color: "#c1c24",
                        fontFamily: "'Roboto', sans-serif",
                      }}
                    >
                      How it All Started
                    </h3>
                    <br />
                    <div
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        lineHeight: "24px",
                        fontSize: "14px",
                        textAlign: "justify",
                      }}
                    >
                      {description}
                      <ul className="pointers">
                        {events.eventDetails.map((det) => {
                          return (
                            <li key={uuid()} style={{ listStyleType: "disc" }}>
                              {det}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <a
                      href="https://www.instagram.com/sietcodingclub/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "inline-block" }}
                    >
                      <div className="kokol">KNOW MORE</div>
                    </a>
                  </div>
                  <div className="pedescSubContainer">
                    <img
                      alt=""
                      src={imageURL[0].imgURL}
                      style={{
                        background: "black",
                        height: "70%",
                        width: "70%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className="pedescIconContainer">
                  <div className="pedescIconContainerDiv">
                    <div
                      style={{
                        fontSize: "2em",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        alt=""
                        src="https://demo.themewinter.com/html/eventor/images/icons/fact-workshop.png"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "10em",
                      }}
                    >
                      {registrations}+<br />
                      Registrations
                    </div>
                  </div>
                  <div className="pedescIconContainerDiv">
                    <div
                      style={{
                        fontSize: "2em",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        alt=""
                        src="https://demo.themewinter.com/html/eventor/images/icons/fact-speaker.png"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "10em",
                      }}
                    >
                      {totalParticipants}+<br />
                      Active Participants
                    </div>
                  </div>
                  {sponsors.length !== 0 && (
                    <div className="pedescIconContainerDiv">
                      <div
                        style={{
                          fontSize: "2em",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          alt=""
                          src="https://demo.themewinter.com/html/eventor/images/icons/fact-sponsor.png"
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "10em",
                        }}
                      >
                        {sponsors.length}
                        <br />
                        Sponsor(s)
                      </div>
                    </div>
                  )}
                  {examiners.length !== 0 && (
                    <div className="pedescIconContainerDiv">
                      <div
                        style={{
                          fontSize: "2em",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          alt=""
                          src="https://demo.themewinter.com/html/eventor/images/icons/fact-country.png"
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "10em",
                        }}
                      >
                        {examiners.length}
                        <br />
                        Judges
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {winners.length !== 0 && (
                <div className="visionaryBox">
                  <div style={{ textAlign: "center" }}>
                    <h6 style={{ fontSize: "1.5em" }}>Bringing in the</h6>
                    <h2 style={{ margin: "0", color: "white" }}>
                      Winners of this Event
                    </h2>
                  </div>

                  <div className="visSpeakerCardContainer">
                    {winners.map((win) => {
                      return (
                        <div
                          className="visSpeakerCardSubContainer"
                          key={uuid()}
                        >
                          {win.teamMembers.map((winn) => {
                            return (
                              <div className="visSpeakerCard" key={uuid()}>
                                <div className="visSpeakerImageSection">
                                  <img
                                    alt=""
                                    src={winn.profileImage}
                                    className="visSpeakerPersonImage"
                                  />
                                  <div className="visSpeakerOverlay">
                                    <div className="visSpeakerSocialIcon">
                                      <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href={winn.socialMediaLinks[0].linkedIn}
                                      >
                                        <i className="fa fa-linkedin socialIcon"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="visSpeakerDetails">
                                  <div className="visSpeakerName">
                                    {winn.Name}
                                  </div>
                                  <div>
                                    {" "}
                                    <b>{win.teamName}</b> - {winn.Batch}
                                    <br />
                                    <b>{win.rank}</b> Position
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {examiners.length!=0 && <section id="ts-speakers" className="ts-speakers gradient-bg">
                <div className="container1">
                  <div className="row1 text-center">
                    <h3 className="section-sub-title title-white">
                      Our Judges
                    </h3>
                  </div>
                  <div className="row">
                    {examiners.map((examin) => {
                      return (
                        <div
                          className="col-xs-12 col-sm-6 col-md-3"
                          key={uuid()}
                        >
                          <div className="ts-speaker">
                            <div className="ts-speaker-image">
                              <img
                                alt=""
                                className="img visSpeakerPersonImage"
                                src={examin.examinerImg}
                              />
                            </div>
                            <div className="ts-speaker-info">
                              <h3 className="ts-speaker-name">
                                {examin.examinerName}
                              </h3>
                              <p className="ts-speaker-designation">
                                {examin.examinerDesignation}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>}

              <div className="sponsorContainer">
                <div className="heading1">Supporting Our Event</div>
                <div className="heading2">Event Sponsor</div>
                <div className="sponsorCard">
                  {sponsors.map((s) => {
                    return (
                      <div className="sponsors" key={uuid()}>
                        <img alt="" src={s.logo} />
                        {s.name}
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className="third">
                <h1>Gallery Section</h1>
                <div className="gallary">
                  <div className="one">
                    <img
                      alt=""
                      className="galleryImage"
                      src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg"
                    />
                  </div>
                  <div className="two">
                    <img
                      alt=""
                      className="galleryImage"
                      src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg"
                    />
                  </div>
                  <div className="three">
                    <img
                      alt=""
                      className="galleryImage"
                      src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg"
                    />
                  </div>
                  <div className="four">
                    <img
                      alt=""
                      className="galleryImage"
                      src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg"
                    />
                  </div>
                  <div className="five">
                    <img
                      alt=""
                      className="galleryImage"
                      src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg"
                    />
                  </div>
                  <div className="six">
                    <img
                      alt=""
                      className="galleryImage"
                      src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg"
                    />
                  </div>
                  <div className="seven">
                    <img
                      alt=""
                      className="galleryImage"
                      src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          );
        }
        return <div key={uuid()}></div>;
      })}
    </>
  );
}
