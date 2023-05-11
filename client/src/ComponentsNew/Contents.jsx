import React, { useEffect } from "react";

export default function Contents() {
  useEffect(() => {
    const astronautContainer = document.querySelector(".contents");
    const astronautBg = document.querySelector(".astronautBg");
    const astronaut = document.querySelector(".astronaut");
    const astronautRectangle = document.querySelector(".astronautRectangle");
    const astronautRectangleLeft =
      astronautRectangle.getBoundingClientRect().left;
    const astronautRectangleTop = astronautRectangle.getBoundingClientRect().top;

    astronautContainer.addEventListener("mousemove", (e) => {
      astronautBg.style.top = -e.y * 0.01 + "px";
      astronautBg.style.left = -e.x * 0.01 + "px";
      astronaut.style.top = e.y * 0.01 + "px";
      astronaut.style.left = e.x * 0.01 + "px";
      astronautRectangle.style.top = -e.y * 0.01 + "px";
      astronautRectangle.style.left =
        astronautRectangleLeft - e.x * 0.01 + "px";
      astronautRectangle.style.top = astronautRectangleTop - e.y * 0.01 + "px";
    });
  });
  return (
    <>
      <div className="contents">
        <img src="./images/astronautBg_cleanup.png" className="astronautBg" />
        <img src="./images/rectanglebox.png" className="astronautRectangle" />
        <img src="./images/astronaut.png" className="astronaut" />
        <div className="name">
          <div className="text">
            <div className="p">
              SCC Coding
              <div className="linec">
                <div className="line"></div>
                Club
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
