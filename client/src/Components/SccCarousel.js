const SccCarousel = ({href,imgSrc,data}) => {
  return (
    <>
      <a href={href} className="carousel-item">
        <img src={imgSrc} />
        <h1>
          <center>{data}</center>
        </h1>
      </a>
    </>
  );
};
export default SccCarousel;
