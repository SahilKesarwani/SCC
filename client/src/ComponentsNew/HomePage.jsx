import React, { useEffect } from "react";
import Contents from "./Contents";
import CarouselArea from "./CarouselArea";
import DomainModal from "../Components/DomainModal";

import domainsApi from "../apis/domainCardApi";

export default function HomePage({ navbar }) {
  useEffect(() => {
    const navBar = navbar.current;
    const childElement1 = document.body.children[1].children[1];
    window.addEventListener("scroll", () => {
      if (childElement1.getBoundingClientRect().bottom <= navBar.clientHeight) {
        // navBar.style.backdropFilter = "blur(10px)";
        navBar.style.backdropFilter = "";
      } else {
        navBar.style.backdropFilter = "";
      }
    });
  });
  return (
    <>
      <Contents />
      <CarouselArea />
      {domainsApi.map((modal) => {
      const { id, title, imgSrc, description } = modal;
      // if ((title.replaceAll(" ","")) == title2) {
      //   console.log(title, title2);
      return <DomainModal key={id} title={title} />
      // }
    })}
    </>
  );
}
