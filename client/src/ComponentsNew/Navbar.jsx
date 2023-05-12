import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/"><div className="logoArea"></div></Link>
        <div className="menuArea">
          <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/eventpage">
                Events
              </Link>
            </li>
            <li>
              <Link to="/ourteam">
                Our Team
              </Link></li>
            <li>
              <Link to="/about">
                About
              </Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
