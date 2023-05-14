export default function EventPage() {
  return (
    <>
      <div
        style={{
          background:
            // "url(./images/low-angle-shot-mesmerizing-starry-sky.jpg)",
            "linear-gradient(to right, #872356, #3682e7)",
        backgroundSize:"cover",
          height: "70vh",
          width: "100vw",
          color: "white",
          position: "relative",
        }}
      >
        <div  className="eventPageHeader">Events</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
          style={{ position: "absolute", bottom: "0" }}
        >
          <path
            fill="white"
            fill-opacity="1"
            d="M0,96L40,128C80,160,160,224,240,213.3C320,203,400,117,480,106.7C560,96,640,160,720,170.7C800,181,880,139,960,138.7C1040,139,1120,181,1200,170.7C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
