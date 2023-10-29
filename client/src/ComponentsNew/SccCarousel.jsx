import React from "react";

export default function SccCarousel({ href, imgSrc }) {
  return (
    <>
      <a href={href} className="carouselllItem">
        <img src={imgSrc} />
      </a>
    </>
  );
}
