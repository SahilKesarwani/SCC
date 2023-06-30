import SccCarousel from "./SccCarousel";
import sccCarouselApi from "../apis/sccCarouselApi";
import DomainContainer from "./DomainContainer";

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
          
            {sccCarouselApi.map((carouselItems) => {
              const { id, href, imgSrc } = carouselItems;
              return <SccCarousel key={id} href={href} imgSrc={imgSrc} />;
            })}
          
        </div>

        <DomainContainer />
      </div>
    </>
  );
}
