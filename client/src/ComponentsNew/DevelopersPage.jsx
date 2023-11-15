import React, { useEffect, useRef } from "react";
import gauriAvatar from "../images/gauriAvatar.png";
import rahulAvatar from "../images/rahulAvatar.png";

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
  const works2 = useRef("");
  const text2 = [
    "WebDeveloper",
    "WebDesigner",
    "Competitive Programmer",
    "Vice President",
  ];
  let i2 = 0,
    j2 = 0;
  const typeWriter2 = () => {
    let workDiv2 = works2.current;
    if (!workDiv2) return;
    if (i2 < text2[j2].length) {
      workDiv2.innerHTML += text2[j2][i2];
      i2++;
      setTimeout(typeWriter2, 60);
    } else {
      i2 = 0;
      j2++;
      if (j2 >= text2.length) j2 = 0;
      setTimeout(() => {
        workDiv2.innerHTML = "";
        typeWriter2();
      }, 2000);
    }
  };
  useEffect(() => {
    typeWriter();
  }, []);
  useEffect(() => {
    typeWriter2();
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

          <p className="meetDevSec2RightSubHead">
            I'm a 3rd year college student of Batch 2021-25. I'm pursuing BTech
            but beside this I've learned my other skills such as Full Stack Web
            Development, Competitive Programming and Canva. I've taken part in
            many events and also have organised many events at the college
            level.
          </p>
        </div>
      </div>
      <div className="meetDevSec2">
        <div className="meetDevSec1Left">
          <div style={{ backgroundImage: `url(${rahulAvatar})` }}></div>
        </div>
        <div className="meetDevSec1Right">
          <p className="meetDevSec1RightSubHead" ref={works2}></p>
          <h2 className="meetDevSec1RightHead">I'm Rahul Singh</h2>

          <p
            className="meetDevSec2RightSubHead"
            style={{ textAlign: "justify", marginLeft: "6em" }}
          >
            Hi, I'm Rahul Singh who has learned few skills like Full Stack Web
            Development, Competitive Programming and Canva. While being a 3rd
            year student of Batch 2021-25, I've also learnt the art of teaching
            and cooking. ;D
          </p>
        </div>
      </div>
      {/* <div className="meetDevSec1">
        <div className="meetDevSec1Left">
          <img src="https://media.licdn.com/dms/image/D4D03AQHX0IG5uVxBMg/profile-displayphoto-shrink_800_800/0/1677298182571?e=1703721600&v=beta&t=tMyxJFsUcl4TnLiQ0wUo_fX8bX7h5_0zQZtMIEePnys" className="meetDevProfilePic"></img>
        </div>
        <div className="meetDevSec2Right">
          <h2 className="meetDevSec2RightHead">I'm Gauri Gupta</h2>
          <p className="meetDevSec2RightSubHead">I'm a 3rd year college student of Batch 2021-25. I'm pursuing BTech but beside this I've learned my other skills such as Full Stack Web Development, Competitive Programming and Canva. I've taken part in many events and also have organised many events at the college level.</p>
          
        </div>
      </div> */}
    </>
  );
}
