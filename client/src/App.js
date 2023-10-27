import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
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
import Error404 from "./ComponentsNew/Error404";
import Footer from "./ComponentsNew/Footer";

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
        <Route path="/domains/:domainName" element={<DomainPage navbar={navbar} />}></Route>
        <Route exact path="/eventpage" element={<EventPage navbar={navbar} />}></Route>
        <Route
          exact
          path="/eventpages/:eventName"
          element={<ParticularEventPage navbar={navbar} />}
        ></Route>
        <Route exact path="/ourteam" element={<OurTeamPage navbar={navbar} />}></Route>
        <Route exact path="/about" element={<About navbar={navbar} />}></Route>
        <Route
          path="*"
          element={
            <Error404 navbar={navbar} />
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
