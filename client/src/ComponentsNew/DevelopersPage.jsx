import React, { useEffect, useRef } from "react";
import gauriAvatar from "../images/gauriAvatar.png";

export default function DevelopersPage({ navbar }) {
  useEffect(() => {
    const navBar = navbar.current;
    const childElement1 = document.body.children[1].children[1];
    window.addEventListener("scroll", () => {
      if (
        childElement1 != null &&
        childElement1.getBoundingClientRect().bottom <= navBar.clientHeight
      ) {
        navBar.style.backdropFilter = "blur(10px)";
      } else {
        navBar.style.backdropFilter = "";
      }
    });
    window.scrollTo(0, 0);
  });
  const works = useRef("");
  const text = [
    "WebDeveloper",
    "WebDesigner",
    "Competitive Programmer",
    "Event Manager",
  ];
  let i = 0,
    j = 0;
  const typeWriter = () => {
    let workDiv = works.current;
    if (!workDiv) return;
    if (i < text[j].length) {
      workDiv.innerHTML += text[j][i];
      i++;
      setTimeout(typeWriter, 60);
    } else {
      i = 0;
      j++;
      if (j >= text.length) j = 0;
      setTimeout(() => {
        workDiv.innerHTML = "";
        typeWriter();
      }, 2000);
    }
  };
  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <>
      <div className="meetDevSec1">
        <div className="meetDevSec1Left">
          <div style={{ backgroundImage: `url(${gauriAvatar})` }}></div>
        </div>
        <div className="meetDevSec1Right">
          <p className="meetDevSec1RightSubHead" ref={works}></p>
          <h2 className="meetDevSec1RightHead">I'm Gauri Gupta</h2>
        </div>
      </div>
      <div className="meetDevSec1">
        <div className="meetDevSec1Left">
          <img src="https://media.licdn.com/dms/image/D4D03AQHX0IG5uVxBMg/profile-displayphoto-shrink_800_800/0/1677298182571?e=1703721600&v=beta&t=tMyxJFsUcl4TnLiQ0wUo_fX8bX7h5_0zQZtMIEePnys" className="meetDevProfilePic"></img>
        </div>
        <div className="meetDevSec2Right">
          <h2 className="meetDevSec2RightHead">I'm Gauri Gupta</h2>
          <p className="meetDevSec2RightSubHead">I'm a 3rd year college student of Batch 2021-25. I'm pursuing BTech but beside this I've learned my other skills such as Full Stack Web Development, Competitive Programming and Canva. I've taken part in many events and also have organised many events at the college level.</p>
          
        </div>
      </div>
    </>
  );
}
