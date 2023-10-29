import SccCarousel from "./SccCarousel";
import sccCarouselApi from "../apis/sccCarouselApi";
import DomainContainer from "./DomainContainer";

export default function CarouselArea() {
  return (
    <>
      <div className="carouselArea">
        <div className="overlay"></div>
        <div
          className="carouselHeading"
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
        {/* <div className="carousel">
          {sccCarouselApi.map((carouselItems) => {
            const { id, href, imgSrc } = carouselItems;
            return <SccCarousel key={id} href={href} imgSrc={imgSrc} />;
          })}
        </div> */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            padding: "1em",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {sccCarouselApi.map((carouselItem) => {
            const { id, href, imgSrc } = carouselItem;
            return <SccCarousel key={id} href={href} imgSrc={imgSrc} />;
          })}
        </div>
        <DomainContainer />
      </div>
    </>
  );
}
