import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./stylenew.css";

import Navbar from "./ComponentsNew/Navbar";
import HomePage from "./ComponentsNew/HomePage";
import EventPage from "./ComponentsNew/EventPage";
import DomainPage from "./ComponentsNew/DomainPage";
import About from "./ComponentsNew/About";
import OurTeamPage from "./ComponentsNew/OurTeamPage";
import ParticularEventPage from "./ComponentsNew/ParticularEventPage";
import Error404 from "./ComponentsNew/Error404";
import Footer from "./ComponentsNew/Footer";
import DevelopersPage from "./ComponentsNew/DevelopersPage";
import FeedbackForm from "./ComponentsNew/FeedbackForm";

const App = () => {
  const navbar = useRef("");
  return (
    <>
      <Navbar navbar={navbar} />
      <Routes>
        <Route exact path="/" element={<HomePage navbar={navbar} />}></Route>
        <Route
          path="/domains/:domainName"
          element={<DomainPage navbar={navbar} />}
        ></Route>
        <Route
          exact
          path="/eventpage"
          element={<EventPage navbar={navbar} />}
        ></Route>
        <Route
          exact
          path="/eventpage/:eventName"
          element={<ParticularEventPage navbar={navbar} />}
        ></Route>
        <Route
          exact
          path="/ourteam"
          element={<OurTeamPage navbar={navbar} />}
        ></Route>
        <Route exact path="/about" element={<About navbar={navbar} />}></Route>
        <Route
          exact
          path="/developersPage"
          element={<DevelopersPage navbar={navbar} />}
        ></Route>
      <Route exact path="/FeedbackForm/CodingCauldron" element={<FeedbackForm/>}></Route>
        <Route path="*" element={<Error404 navbar={navbar} />}></Route>
        
      </Routes>
      <Footer />
    </>
    // <>
    //   <Routes>
        
    //     <Route path="*" element={<div>All other pages have been disabled by the Website Administrator</div>}></Route>
        
    //   </Routes>
    // </>
  );
};

export default App;
