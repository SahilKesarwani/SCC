import React, { useEffect } from "react";
import Contents from "./Contents";
import CarouselArea from "./CarouselArea";
import DomainModal from "../Components/DomainModal";

import domainsApi from "../apis/domainCardApi";
import DomainContainer from "./DomainContainer";

export default function HomePage({ navbar }) {
  useEffect(() => {
    const navBar = navbar.current;
    const childElement1 = document.body.children[1].children[1];
    window.addEventListener("scroll", () => {
      if (childElement1.getBoundingClientRect().bottom <= navBar.clientHeight) {
        navBar.style.backdropFilter = "blur(10px)";
        // navBar.style.backdropFilter = "";
      } else {
        navBar.style.backdropFilter = "";
      }
    });
  });
  // const AddScript = (urlOfScript) => {
  //   const script = document.createElement("script");
  //   script.src = urlOfScript;
  //   document.body.appendChild(script);
  // };
  // const addd = () => {
  //   const script = document.createElement("script");
  //   script.innerHTML =
  //     "$(document).ready(function () {" + "$('.carousel').carousel();});";
  //   document.body.appendChild(script);
  // };
  // useEffect(() => {
  //   window.onload = function () {
  //     addd();
  //   };
  // });
  return (
    <>
      <Contents />
      <CarouselArea />

      {/* {domainsApi.map((modal) => {
      const { id, title, imgSrc, description } = modal;
      // if ((title.replaceAll(" ","")) == title2) {
      //   console.log(title, title2);
      return <DomainModal key={id} title={title} />
      // }
    })} */}

      {/* {AddScript("https://code.jquery.com/jquery-1.12.0.min.js")} */}
      {/* {AddScript(
        "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
      )} */}
    </>
  );
}
