import React from "react";

export default function DomainCard({ title, imgSrc, description }) {
  return (
    <>
      <div className="parentr">
        <div className="leftr"></div>
        <div className="rightr"></div>
        <div className="topr"></div>
        <div className="bottomr"></div>
        <div className="cardr">
          <img src={imgSrc} />
          <div className="content">
            <h5>{title}</h5>
            <p>{description}</p>
            <div className="btn">Know More</div>
          </div>
          <div className="overlayr"></div>
        </div>
      </div>
    </>
  );
}
