import { useParams } from "react-router-dom";
import domainsApi from "../apis/domainCardApi";
import { useEffect } from "react";

export default function DomainPage({navbar}) {
  useEffect(() => {
    const navBar = navbar.current;
    const childElement1 = document.body.children[1].children[1];
    window.addEventListener("scroll", () => {
      if (childElement1.getBoundingClientRect().bottom <= navBar.clientHeight) {
        navBar.style.backdropFilter = "blur(10px)";
      } else {
        navBar.style.backdropFilter = "";
      }
    });
  });
  const { domainName } = useParams();
  
  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.transparenttextures.com/patterns/3px-tile.png)",
        backgroundColor: "black",
      }}
    >
      {domainsApi.map((domains) => {
        const { id, title, description, roadmap, videoLinks } = domains;
        if (title === domainName) {
          return (
            <div key={id} style={{ padding: "3em" }}>
              <div className="eventHeaderr" style={{ position: "relative" }}>
                <div style={{ height: "50%" }}>
                  <h1 className="neon_green">{domainName}</h1>
                </div>
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    bottom: "0",
                    width: "100vw",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                  }}
                >
                  <img alt="" 
                    src={require("../images/ill1.png")}
                    style={{
                      height: "100px",
                      position: "",
                      top: "545px",
                      left: "10px",
                    }}
                  />
                  <img alt="" 
                    src={require("../images/ill2.png")}
                    style={{
                      height: "80px",
                      position: "",
                      top: "545px",
                      left: "210px",
                    }}
                  />
                  <img alt="" 
                    src={require("../images/ill3.png")}
                    style={{
                      height: "80px",
                      position: "",
                      top: "545px",
                      left: "410px",
                    }}
                  />
                  <img alt="" 
                    src={require("../images/ill4.png")}
                    style={{
                      height: "80px",
                      position: "",
                      top: "545px",
                      left: "610px",
                    }}
                  />
                  <img alt="" 
                    src={require("../images/ill5.png")}
                    style={{
                      height: "80px",
                      position: "",
                      top: "545px",
                      left: "810px",
                    }}
                  />
                  <img alt="" 
                    src={require("../images/ill6.png")}
                    style={{
                      height: "80px",
                      position: "",
                      top: "545px",
                      left: "1010px",
                    }}
                  />
                  <img alt="" 
                    src={require("../images/ill7.png")}
                    style={{
                      height: "80px",
                      position: "",
                      top: "545px",
                      left: "1210px",
                    }}
                  />
                  <img alt="" 
                    src={require("../images/ill8.png")}
                    style={{
                      height: "80px",
                      position: "",
                      top: "545px",
                      left: "1410px",
                    }}
                  />
                </div>
              </div>
              <div className="eventtDescription">
                <div className="eventtDescriptionDiv">
                  <h2>What is {title} ?</h2>
                  <div className="eventtDescriptionCircle"></div>
                </div>
                <div className="eventtDescriptionDiv"><p className="eventtDescriptionP">{description}</p></div>
              </div>
              {/* roadmap */}
              <h2
                className="neon_green"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "100px",
                  color: "white",
                  fontFamily: "'Dancing Script', cursive",
                }}
              >
                Start your journey to {title} from here
              </h2>
              <div
                style={{
                  display: "flex",
                  height: "390.1px",
                  overflowX: "scroll",
                  margin: "10px",
                }}
              >
                {Object.entries(roadmap).map((steps) => {
                  return (
                    <div className="stepContainer2" key={steps}>
                      <div className="stepContainer" key={id}>
                        <div className="vline"></div>
                        <div className="steps">
                          <div className="leftrr"></div>
                          <div className="rightrr"></div>
                          <div className="toprr"></div>
                          <div className="bottomrr"></div>

                          {steps[0] + " : " + steps[1]}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="videoRecomSection">
                <h2
                  className="neon_green"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "100px",
                    color: "white",
                    fontFamily: "'Dancing Script', cursive",
                  }}
                >
                  Recommended Videos
                </h2>
                <div className="videoContainer">
                  {videoLinks.map((video) => {
                    const { titleText, videoLink, imgLink } = video;
                    return (
                      <div className="video" key={videoLink}>
                        <a href={videoLink} target="_blank" rel="noreferrer" >
                          <img alt=""  src={imgLink} />
                          <div className="videoTitle">{titleText}</div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }
        return(<></>);
      }
      
      )}
    </div>
  );
}
