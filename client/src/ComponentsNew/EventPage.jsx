import eventsListApi from "../apis/eventsListApi";


export default function EventPage() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://tse2.mm.bing.net/th?id=OIP.x-167wtYdgyEFYZEA2BPsQHaEJ&pid=Api&P=0')",
          backgroundSize: "cover",
          height: "70vh",
          width: "100vw",
          color: "white",
          position: "relative",
        }}
      >
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <div
          className="eventPageHeader"
          style={{ position: "absolute", top: "0", zIndex: "100" }}
        >
          Events
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
          style={{ position: "absolute", bottom: "0", zIndex: "1100" }}
        >
          <path
            fill="white"
            fill-opacity="1"
            d="M0,96L40,128C80,160,160,224,240,213.3C320,203,400,117,480,106.7C560,96,640,160,720,170.7C800,181,880,139,960,138.7C1040,139,1120,181,1200,170.7C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div
        className="upcomingEventHeading"
        style={{
          width: "100vw",
          height: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
          fontFamily: "'Merriweather', serif",
          paddingBottom: "1em",
        }}
      >
        <h2>Upcoming Event</h2>
        
      </div>
      <div className="d-flex" style={{ justifyContent: "space-evenly", gap: "10px" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text" style={{ height: "50px" }}></p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text" style={{ height: "50px" }}></p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text" style={{ height: "50px" }}></p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text" style={{ height: "50px" }}></p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div
        className="upcomingEventHeading"
        style={{
          width: "100vw",
          height: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
          fontFamily: "'Merriweather', serif",
          paddingBottom: "1em",
          paddingTop: "1em",
        }}
      >
        <h2>Past Event</h2>
      </div>
      <div className="pastEventList">
        
        {eventsListApi.map((events)=>{
          const {id, name, time, date} = events;
          return <div className="eventList" key={id}>
            <div className="title">{name}</div>
            <div className="dateAndTime">{date} {time}</div>
            </div>
        })}
        </div>

    </>
  );
}
