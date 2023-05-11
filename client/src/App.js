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
			{/* <HomePage/>
			<EventPage/> */}





			
			<Navbar/>
			<Routes>
				<Route exact path="/" element={<HomePage/>}></Route>
				<Route exact path="/eventpage" element={<EventPage/>}></Route>
				<Route exact path="/ourteam" element={<div>I'm Our Team Page</div>}></Route>
				<Route exact path="/about" element={<div>I'm About Page</div>}></Route>
				<Route path="*" element={<div>Error 404</div>}></Route>
			</Routes>
		</>
	);
};

export default App;
