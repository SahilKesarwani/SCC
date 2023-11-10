import SccCarousel from "./SccCarousel";
import sccCarouselApi from "../apis/sccCarouselApi";
import DomainContainer from "./DomainContainer";
import { useRef, useState } from "react";

export default function CarouselArea() {
  const [modalImage, setModalImage] = useState(null);
  const handleImgClick = (e) => {
    const img = e.target.src;
    setModalImage(img);
  };
  const handleCloseModal = () => {
    setModalImage(null);
  };
  return (
    <>
      {modalImage && (
        <div className="carouselImgModal" >
          <img src={modalImage} />
          <span className="material-symbols-outlined closeBtn" onClick={handleCloseModal}>close</span>
        </div>
      )}
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
            return (
              <SccCarousel
                key={id}
                href={href}
                imgSrc={imgSrc}
                handleImgClick={handleImgClick}
              />
            );
          })}
        </div>
        <DomainContainer />
      </div>
    </>
  );
}
