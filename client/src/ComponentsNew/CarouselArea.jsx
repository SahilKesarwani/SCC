import DomainCard from "./DomainCard";
import domainsApi from "../apis/domainCardApi";
export default function carouselArea() {
  return (
    <>
      <div className="carouselArea">
        <div className="overlay"></div>
        <div
          style={{
            position: "relative",
            color: "white",
            textAlign: "center",
            fontFamily: "'Titillium Web', sans-serif",
          }}
        >
          <h1>Steps taken by us</h1>
          <hr />
          <h6>for improving our club</h6>
        </div>
        <div className="carousel">
          <a className="carousel-item" href="#one!">
            <img src="./images/Untitled.png" />
          </a>
          <a className="carousel-item" href="#two!">
            <img src="./images/Untitled.png" />
          </a>
          <a className="carousel-item" href="#three!">
            <img src="./images/Untitled.png" />
          </a>
          <a className="carousel-item" href="#four!">
            <img src="./images/Untitled.png" />
          </a>
          <a className="carousel-item" href="#five!">
            <img src="./images/Untitled.png" />
          </a>
          <a className="carousel-item" href="#six!">
            <img src="./images/Untitled.png" />
          </a>
        </div>

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
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
