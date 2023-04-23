import { useRef } from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import "./style.css"

const App = () => {
  const navbar = useRef("");
  return (
    <>
      <Navbar navbar={navbar} />
      <HomePage navbar={navbar} />
    </>
  );
};

export default App;
