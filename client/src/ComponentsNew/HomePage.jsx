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
        // navBar.style.backdropFilter = "blur(10px)";
        navBar.style.backdropFilter = "";
      } else {
        navBar.style.backdropFilter = "";
      }
    });
  });
  const AddScript = (urlOfScript) => {
    const script = document.createElement("script");
    script.src = urlOfScript;
    document.body.appendChild(script);
  };
  const addd = () => {
    const script = document.createElement("script");
    script.innerHTML =
      "$(document).ready(function () {" + "$('.carousel').carousel();});";
    document.body.appendChild(script);
  };
  useEffect(()=>{
    window.onload = function(){
      addd();
    }
  })
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
      <div className="carousel">
        <div className="carousel-item">
          <a href="https://www.geeksforgeeks.org/how-to-create-responsive-image-gallery-using-html-css-jquery-and-bootstrap/">
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200130114641/responsivegallary1.png" />
          </a>
          <h4>Responsive image gallery</h4>
        </div>

        <div className="carousel-item">
          <a href="https://www.geeksforgeeks.org/how-to-create-a-tab-image-gallery/">
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20191205124138/5510.png" />
          </a>
          <h4>Tab image gallery</h4>
        </div>

        <div className="carousel-item">
          <a href="https://www.geeksforgeeks.org/html-course-building-header-of-the-website/">
            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Screenshot-25-1024x453.png" />
          </a>
          <h4>Building header of a website</h4>
        </div>

        <div className="carousel-item">
          <a href="https://www.geeksforgeeks.org/how-to-design-image-slider-using-jquery/">
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200214124104/imageslider1.png" />
          </a>
          <h4>image slider</h4>
        </div>

        <div className="carousel-item">
          <a href="https://www.geeksforgeeks.org/how-to-create-image-lightbox-gallery-using-html-css-and-javascript/">
            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200320161020/Screenshot-from-2020-03-20-16-06-36.png" />
          </a>
          <h4>image lightbox gallery</h4>
        </div>
      </div>

      {AddScript("https://code.jquery.com/jquery-1.12.0.min.js")}
      {AddScript(
        "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
      )}
    </>
  );
}
