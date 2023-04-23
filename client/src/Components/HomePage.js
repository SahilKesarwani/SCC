import { useEffect, useRef } from "react"
import DomainCard from "./DomainCard";
import SccCarousel from "./SccCarousel";
import domainsApi from "../apis/domainCardApi";
import sccCarouselApi from "../apis/sccCarouselApi";


const HomePage = ({navbar}) => {
  const domainClick = (title) => {
    console.log(title);
  };

  const detailsContainer = useRef("");
  const domainsSections = useRef("");
  const carouselSection = useRef("");

  const applyStyling = () => {
    const navbarHeight = navbar.offsetHeight;
    const windowHeight = window.innerHeight;
    detailsContainer.current.style.scale =
      1 -
      window.scrollY /
      (document.documentElement.offsetHeight - window.innerHeight);
    detailsContainer.current.style.opacity =
      1 -
      (window.scrollY /
        (document.documentElement.offsetHeight - window.innerHeight)) *
      3;
    domainsSections.current.style.paddingTop = navbarHeight + "px";
    domainsSections.current.style.scale =
      1 -
      (domainsSections.current.getBoundingClientRect().top - navbarHeight) /
        (windowHeight - navbarHeight);
    domainsSections.current.style.opacity =
      1 -
      (domainsSections.current.getBoundingClientRect().top - navbarHeight) /
      (windowHeight - navbarHeight);
    if(domainsSections.current.style.scale > 1) {
      domainsSections.current.style.scale = 1;
      domainsSections.current.style.opacity = 1;
    }
    if(carouselSection.current.getBoundingClientRect().top < windowHeight / 2) {
      carouselSection.current.classList.add("vis");
    } else {
      carouselSection.current.classList.remove("vis");
    }
  }
  
  useEffect(() => {
    window.addEventListener("scroll", applyStyling);
    return () => window.removeEventListener("scroll", applyStyling);
  }, [])

  return (
    <>
      <div className="DetailsContainer" ref={detailsContainer}>
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
      <div className="carouselSection" ref={carouselSection}>
        <div className="carousel">
          {sccCarouselApi.map((carousel) => {
            const { id, href, imgSrc, data } = carousel;
            return (
              <SccCarousel key={id} href={href} imgSrc={imgSrc} data={data} />
            );
          })}
        </div>
      </div>
      <div className="domainsSection" ref={domainsSections}>
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
