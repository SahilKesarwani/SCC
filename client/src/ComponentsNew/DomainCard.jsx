import React from "react";
import { Link } from "react-router-dom";
import DomainPage from "./DomainPage";

export default function DomainCard({
  title,
  imgSrc,
  description,
  domainClick,
}) {
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
            <p>
              {description.length > 100
                ? description.substring(0, 100) + "..."
                : description}
            </p>
            <Link
              to={{
                pathname: `domains/${title}`,
              }}
            >
              <div
                className="btn"
                // onClick={() => {domainClick(title);}}
              >
                Know More
              </div>
            </Link>
          </div>
          <div className="overlayr"></div>
        </div>
      </div>
    </>
  );
}
