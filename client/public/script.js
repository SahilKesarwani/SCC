window.onload = function () {
  let detailsContainer = document.querySelector(".DetailsContainer");
  let domainsSections = document.querySelector(".domainsSection");
  let carouselSection = document.querySelector('.carouselSection');
  let navbarHeight = document.querySelector(".navbar").offsetHeight;
  let windowHeight = window.innerHeight;
  document.querySelector(".domainsSection").style.paddingTop = navbarHeight + "px";
  window.addEventListener("scroll", () => {
    detailsContainer.style.scale = 1 - window.scrollY /(document.documentElement.offsetHeight - window.innerHeight);
    detailsContainer.style.opacity = 1 -(window.scrollY /(document.documentElement.offsetHeight - window.innerHeight)) *3;
    domainsSections.style.scale = 1 -(domainsSections.getBoundingClientRect().top - navbarHeight) / (windowHeight - navbarHeight);
    domainsSections.style.opacity= 1 -(domainsSections.getBoundingClientRect().top-navbarHeight) /  (windowHeight - navbarHeight);
    if (domainsSections.style.scale > 1) {
      domainsSections.style.scale = 1;
      domainsSections.style.opacity = 1;
    }
    if(carouselSection.getBoundingClientRect().top<windowHeight/2){
        carouselSection.classList.add('vis');
    }
    else{
        carouselSection.classList.remove('vis');
    }
  });
};
