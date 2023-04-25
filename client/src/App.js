import { useRef } from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import EventsPage from "./Components/EventsPage";
import "./style.css"

const App = () => {
  const navbar = useRef("");
  return (
    <>
      <Navbar navbar={navbar} />
      <HomePage navbar={navbar} />
      {/* <EventsPage navbar={navbar} title="Hello"/> */}
    </>
  );
};

export default App;
