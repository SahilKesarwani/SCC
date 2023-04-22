import DomainCard from "./DomainCard";
import SccCarousel from "./SccCarousel";
import domainsApi from "../apis/domainCardApi";
import sccCarouselApi from "../apis/sccCarouselApi";
const domainClick = (title) => {
  console.log(title);
};

const HomePage = () => {
  return (
    <>
      <div className="DetailsContainer">
        <div className="detailsSection">
          <h1>SCC SIET Coding Club</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            velit, ab ad perspiciatis praesentium illo ea ipsam, fugiat fugit
            quod, explicabo in unde animi corrupti quisquam saepe eligendi
            facilis hic?
          </p>
        </div>
        <div className="planetContainer">
          <div className="planet"></div>
        </div>
      </div>
      <div className="carouselSection">
        <div className="carousel">
          {sccCarouselApi.map((carousel) => {
            const { id, href, imgSrc, data } = carousel;
            return (
              <SccCarousel key={id} href={href} imgSrc={imgSrc} data={data} />
            );
          })}
        </div>
      </div>
      <div className="domainsSection">
        <h1>
          <center>Domains</center>
        </h1>
        <div className="card_container">
          {domainsApi.map((domain) => {
            const { id, title, imgSrc, description } = domain;
            return (
              <DomainCard
                key={id}
                title={title}
                imgSrc={imgSrc}
                description={description}
                domainClickButton={domainClick}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
