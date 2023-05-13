import React from "react";
import DomainCard from "./DomainCard";
import domainsApi from "../apis/domainCardApi";

export default function DomainContainer() {
  const domainClickFunc = (title) => {
    const title2 = title.replaceAll(" ", "");
    const modals = document.querySelectorAll(".modall");
    Array.from(modals).forEach((modals) => {
      modals.style.display = "none";
    });
    document.getElementById(title2).style.display = "flex";
  };
  return (
    <>
      <div className="domainContainer">
        {/* <div className="overlay"></div> */}
        <div
          style={{
            position: "relative",
            color: "white",
            textAlign: "center",
            fontFamily: "'Titillium Web', sans-serif",
          }}
        >
          <h1>Paths to be explored</h1>
          <hr />
          <h6>Domains</h6>
        </div>
        <div className="domainArea">
          {domainsApi.map((domain) => {
            const { id, title, imgSrc, description } = domain;
            return (
              <DomainCard
                key={id}
                title={title}
                imgSrc={imgSrc}
                description={description}
                domainClick={domainClickFunc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
