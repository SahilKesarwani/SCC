import React from "react";

export default function AboutCard({ title, imgSrc, description }) {
  return (
    <>
      {/* <div className="parentr">
        <div className="leftr"></div>
        <div className="rightr"></div>
        <div className="topr"></div>
        <div className="bottomr"></div>
        <div className="cardr">
          <img src={imgSrc} />
          <div className="content">
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
          <div className="overlayr"></div>
        </div>
      </div> */}
      <div className="flip-card parentr">
        <div className="leftr"></div>
        <div className="rightr"></div>
        <div className="topr"></div>
        <div className="bottomr"></div>
        <div className="flip-card-inner">
          <div className="flip-card-front ">
            <img src={imgSrc} alt=""/>
          </div>
          <div className="flip-card-back">
            <p>{description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
