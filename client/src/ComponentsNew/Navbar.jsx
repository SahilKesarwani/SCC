import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styleNavBar.css";

export default function Navbar({ navbar }) {
  useEffect(() => {
    let navCloseButton = document.querySelector(".navCloseButton");
    let openCloseNavBtn = navCloseButton.childNodes[0];
    let navMenuArea = document.querySelector(".menuArea");
    navCloseButton.addEventListener("click", () => {
      if (navMenuArea.style.transform === "translateX(0px)") {
        navMenuArea.style.transform = "";
        navCloseButton.style.color = "white";
        openCloseNavBtn.innerHTML = "menu";
      } else {
        navMenuArea.style.transform = "translateX(0px)";
        navCloseButton.style.color = "black";
        openCloseNavBtn.innerHTML = "close";
      }
    });
  }, []);
  const toggleNav = () => {
    let navCloseButton = document.querySelector(".navCloseButton");
    navCloseButton.click();
  };
  return (
    <>
      <div className="navbar" ref={navbar}>
        <Link to="/">
          <div className="logoArea"></div>
        </Link>
        <div className="navCloseButton">
          <span className="material-symbols-outlined" id="openCloseNavBtn">
            menu
          </span>
        </div>
        <div className="menuArea">
          <ul className="menu">
            <li>
              <Link to="/" onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/eventpage" onClick={toggleNav}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/ourteam" onClick={toggleNav}>
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleNav}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
