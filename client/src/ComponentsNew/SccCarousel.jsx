import React from "react";

export default function SccCarousel({ href, imgSrc,handleImgClick }) {
  return (
    <>
      <a href={href} className="carouselllItem" onClick={handleImgClick}>
        <img src={imgSrc} />
      </a>
    </>
  );
}
