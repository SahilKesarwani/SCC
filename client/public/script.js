window.onload = function () {
  let temp1 = document.querySelector(".DetailsContainer");
  let temp2 = document.querySelector(".domainsSection");
  let carouselSection = document.querySelector('.carouselSection');
  let navbarHeight = document.querySelector(".navbar").offsetHeight;
  let windowHeight = window.innerHeight;
  document.querySelector(".domainsSection").style.paddingTop = navbarHeight + "px";
  window.addEventListener("scroll", () => {
    temp1.style.scale = 1 - window.scrollY /(document.documentElement.offsetHeight - window.innerHeight);
    temp1.style.opacity = 1 -(window.scrollY /(document.documentElement.offsetHeight - window.innerHeight)) *3;
    temp2.style.scale = 1 -(temp2.getBoundingClientRect().top - navbarHeight) / (windowHeight - navbarHeight);
    temp2.style.opacity= 1 -(temp2.getBoundingClientRect().top-navbarHeight) /  (windowHeight - navbarHeight);
    if (temp2.style.scale > 1) {
      temp2.style.scale = 1;
      temp2.style.opacity = 1;
    }
    if(carouselSection.getBoundingClientRect().top<windowHeight/2){
        carouselSection.classList.add('vis');
    }
    else{
        carouselSection.classList.remove('vis');
    }
  });
};
