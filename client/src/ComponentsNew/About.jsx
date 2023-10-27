import React, { useEffect } from "react";
import AboutCard from "./AboutCard";

export default function About({navbar}) {
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
  useEffect(() => {
    const particularEventSection1div1 = document.getElementsByClassName(
      "particularEventSection1div1"
    )[0];
    let particularEventSection1div1WidthHold = 0;
    // particularEventSection1div1.addEventListener("click", () => {
    //   particularEventSection1div1WidthHold =
    //     particularEventSection1div1WidthHold == 0 ? 1 : 0;
    // });
    window.addEventListener("mousemove", (mouse) => {
      if (particularEventSection1div1WidthHold === 0) {
        particularEventSection1div1.style.width =
          window.innerWidth - mouse.x + "px";
      }
    });
  }, []);

  return (
    <>
      <div className="particularEventSection1">
        <div className="particularEventSection1div1">
          <div className="particularEventSection1div1heading">
            <div className="particularEventSection1div1headingText">
              Get things done <br />
              with your
              <svg
                style={{
                  height: "1.7em",
                  position: "relative",
                  bottom: "-47px",
                }}
                viewBox="0 0 310 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.5816 21C40.9734 55.1254 18.5305 115.69 37.899 141.822"
                  stroke="#F84F39"
                  strokeWidth="10"
                  strokeLinecap="round"
                  pathLength="1"
                  className="team-t"
                ></path>
                <path
                  d="M9 92.0179C32.0577 99.089 59.727 88.3287 70.7947 71.1123C81.8624 53.8958 51.7336 67.423 46.8146 95.7072C41.8957 123.991 57.5749 129.525 79.7103 117.228"
                  stroke="#F84F39"
                  strokeWidth="10"
                  strokeLinecap="round"
                  pathLength="1"
                  className="team-e"
                ></path>
                <path
                  d="M112.299 74.1868C83.707 69.882className=7 70.7947 120.917 80.94 117.228C91.0854 113.539 113.221 74.4943 114.143 67.7307C115.065 60.9671 107.994 127.681 114.143 127.373C120.292 127.066 128.593 117.535 137.201 101.549C145.809 85.5619 145.502 69.5753 149.806 67.7307C154.11 65.886 153.495 127.373 155.647 127.373C157.799 127.373 177.782 68.3455 181.779 69.2678C185.776 70.1901 181.164 117.228 183.931 117.228C186.698 117.228 218.979 77.5686 229.432 79.7207C239.885 81.8727 230.354 103.086 286 103.086"
                  stroke="#F84F39"
                  strokeWidth="10"
                  strokeLinecap="round"
                  pathLength="1"
                  className="team-am"
                ></path>
              </svg>
              at SCC
            </div>
          </div>
          <div className="particularEventSection1div1carousel">
            <div className="particularEventSection1div1carouselImageCards">
              <img alt=""  src="./images/pic 1.jpg" />
            </div>
            <div className="particularEventSection1div1carouselImageCards">
              <img alt=""  src="./images/pic 11.jpg" />
            </div>
            <div className="particularEventSection1div1carouselImageCards">
              <img alt=""  src="./images/pic 3.jpg" />
            </div>
            <div className="particularEventSection1div1carouselImageCards">
              <img alt=""  src="./images/pic 10.jpg" />
            </div>
            <div className="particularEventSection1div1carouselImageCards">
              <img alt=""  src="./images/pic 5.jpg" />
            </div>
            <div className="particularEventSection1div1carouselImageCards">
              <img alt=""  src="./images/pic 6.jpg" />
            </div>
            <div className="particularEventSection1div1carouselImageCards">
              <img alt=""  src="./images/pic 12.jpg" />
            </div>
            <div className="particularEventSection1div1carouselImageCards">
              <img alt=""  src="./images/pic 8.jpg" />
            </div>
            <div className="particularEventSection1div1carouselImageCards">
              <img alt=""  src="./images/pic 9.jpg" />
            </div>
            <div className="particularEventSection1div1carouselImageCards">
              <img alt=""  src="./images/pic 10.jpg" />
            </div>
          </div>
        </div>
        <div className="particularEventSection1div2">
          <video
            src="./images/pic 11.mp4"
            className="particularEventSection1div2Video"
            muted
            autoPlay
            loop
          ></video>
        </div>
      </div>

      <div className="secondSec">
        <div className="aboutSCCIntroContainer">
          <div className="aboutSCCIntroContainerText">
            <h2 className="whatis">What is SCC ?</h2>
            <b>SIET CODING CLUB (SCC)</b>
            is a club, or a committee for the students committed to Tech. We
            believe in working together as a whole, to achieve the greater good,
            that is touching the boundary of perfection when it comes to this
            field. We are a team of students of SIET, striving towards growth,
            and success by excelling in the field of Computer Science.
          </div>
          <div className="aboutSCCIntroContainerImage">
            <img alt=""  src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg" />
          </div>
        </div>
      </div>
      <div className="third">
        <h1>Gallery Section</h1>
        <div className="gallary">
          <div className="one">
            <img alt="" 
              className="galleryImage"
              src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg"
            />
          </div>
          <div className="two">
            <img alt="" 
              className="galleryImage"
              src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg"
            />
          </div>
          <div className="three">
            <img alt="" 
              className="galleryImage"
              src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg"
            />
          </div>
          <div className="four">
            <img alt="" 
              className="galleryImage"
              src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg"
            />
          </div>
          <div className="five">
            <img alt="" 
              className="galleryImage"
              src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg"
            />
          </div>
          <div className="six">
            <img alt="" 
              className="galleryImage"
              src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg"
            />
          </div>
          <div className="seven">
            <img alt="" 
              className="galleryImage"
              src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg"
            />
          </div>
        </div>
      </div>
      <div className="heading">
        <h1>What we do</h1>
      </div>
      <div className="fourth">
        <AboutCard
          title="Hackthon"
          imgSrc="https://tse4.mm.bing.net/th?id=OIP.XM6Bt1eudAsRjY610zeemgHaEK&pid=Api&P=0&h=180"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            aspernatur quos, minus sint deleniti commodi repellat iure inventore
            voluptatem cum nobis pariatur suscipit architecto consequatur, ex
            autem illo nihil fugiat!"
        />
        <AboutCard
          title="Hackthon"
          imgSrc="https://tse4.mm.bing.net/th?id=OIP.XM6Bt1eudAsRjY610zeemgHaEK&pid=Api&P=0&h=180"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            aspernatur quos, minus sint deleniti commodi repellat iure inventore
            voluptatem cum nobis pariatur suscipit architecto consequatur, ex
            autem illo nihil fugiat!"
        />
        <AboutCard
          title="Hackthon"
          imgSrc="https://tse4.mm.bing.net/th?id=OIP.XM6Bt1eudAsRjY610zeemgHaEK&pid=Api&P=0&h=180"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            aspernatur quos, minus sint deleniti commodi repellat iure inventore
            voluptatem cum nobis pariatur suscipit architecto consequatur, ex
            autem illo nihil fugiat!"
        />
        <AboutCard
          title="Hackthon"
          imgSrc="https://tse4.mm.bing.net/th?id=OIP.XM6Bt1eudAsRjY610zeemgHaEK&pid=Api&P=0&h=180"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            aspernatur quos, minus sint deleniti commodi repellat iure inventore
            voluptatem cum nobis pariatur suscipit architecto consequatur, ex
            autem illo nihil fugiat!"
        />
      </div>
    </>
  );
}
