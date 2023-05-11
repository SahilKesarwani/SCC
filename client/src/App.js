import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./ComponentsNew/Navbar";
// import Navbar from "./Components/Navbar";
// import HomePage from "./Components/HomePage";
// import EventsPage from "./Components/EventsPage";
// import "./style.css";

import "./stylenew.css";

const App = () => {
	// const navbar = useRef("");
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
			<Navbar/>
		</>
	);
};

export default App;
