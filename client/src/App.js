import { useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./ComponentsNew/Navbar";
// import Navbar from "./Components/Navbar";
// import HomePage from "./Components/HomePage";
// import EventsPage from "./Components/EventsPage";
// import "./style.css";

import "./stylenew.css";
import HomePage from "./ComponentsNew/HomePage";
import EventPage from "./ComponentsNew/EventPage";
import DomainPage from "./ComponentsNew/DomainPage";
import OurTeamPage from "./ComponentsNew/OurTeamPage";
import About from "./ComponentsNew/About";
import ParticularEventPage from "./ComponentsNew/ParticularEventPage";

const App = () => {
  const navbar = useRef("");
  return (
    <>
      {/* <Navbar navbar={navbar} /> */}
      {/* <Routes>
				<Route exact path="/" element={<HomePage navbar={navbar} />} />
				<Route exact path="/events" element={<EventsPage navbar={navbar} title="SlideShow Container" />} />
				<Route path="*" element={<HomePage navbar={navbar} />} />
			</Routes> */}
      {/* <HomePage navbar={navbar} /> */}
      {/* <EventsPage navbar={navbar} title="SlideShow Container" /> */}
      {/* <HomePage/>
			<EventPage/> */}

      <Navbar navbar={navbar} />
      <Routes>
        <Route exact path="/" element={<HomePage navbar={navbar} />}></Route>
        <Route path="/domains/:domainName" element={<DomainPage />}></Route>
        <Route exact path="/eventpage" element={<EventPage />}></Route>
        <Route exact path="/eventpages/:eventName" element={<ParticularEventPage />}></Route>
        <Route
          exact
          path="/ourteam"
          element={<OurTeamPage/>}
        ></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route path="*" element={<div style={{color:"black", marginTop:"10%", textAlign:"center", fontSize:"4em"}}>Error 404</div>}></Route>
      </Routes>
    </>
  );
};

export default App;
