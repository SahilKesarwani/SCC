import React from "react";

export default function Navbar() {
  return (
    <>
      <div class="navbar">
        <div class="logoArea"></div>
        <div class="menuArea">
          <ul class="menu">
            <li>Home</li>
            <li>
              <a href="events.html" target="_blank">
                Events
              </a>
            </li>
            <li>Our Team</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </>
  );
}
