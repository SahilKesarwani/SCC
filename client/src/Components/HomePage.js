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
          <a href="#one" className="carousel-item">
            <img src="./images/oath_to_code.jpg" />
            <h1>
              <center>One Day Challenges</center>
            </h1>
          </a>
          <a href="#two" className="carousel-item">
            <img src="./images/hackverse.jpg" />
            <h1>
              <center>Hackathons</center>
            </h1>
          </a>
          <a href="#three" className="carousel-item">
            <img src="./images/bootcamp.jpg" />
            <h1>
              <center>Bootcamp</center>
            </h1>
          </a>
          <a href="#four" className="carousel-item">
            <img src="./images/30daysChallenge.jpg" />
            <h1>
              <center>30 Days Challenge</center>
            </h1>
          </a>
          <a href="#five" className="carousel-item">
            <img src="https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png" />
            <h1>
              <center>Join Us</center>
            </h1>
          </a>
        </div>
      </div>
      <div className="domainsSection">
        <h1>
          <center>Domains</center>
        </h1>
        <div className="card_container">
          <div className="parentr">
            <div className="leftr"></div>
            <div className="rightr"></div>
            <div className="topr"></div>
            <div className="bottomr"></div>
            <div className="cardr">
              <img src="https://w0.peakpx.com/wallpaper/469/148/HD-wallpaper-fullstack-development-nodejs-programmer-technology.jpg" />
                <div className="content">
                  <h5>Web Development</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi enim doloremque alias dicta ad dolor, numquam eos
                    itaque quasi rem ut sint.
                  </p>
                  <div className="btn">Enroll</div>
                </div>
              <div className="overlayr">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
