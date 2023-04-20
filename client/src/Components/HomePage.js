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
      <div style={{ width: "100vw", height: "100vh" }}>
      <div className="carousel">
            <a href="#one" className="carousel-item">
                <img
                    src="https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png"/>
            </a>
            <a href="#two" className="carousel-item">
                <img
                    src="https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png"/>
            </a>
            <a href="#three" className="carousel-item">
                <img
                    src="https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png"/>
            </a>
            <a href="#four" className="carousel-item">
                <img
                    src="https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png"/>
            </a>
            <a href="#five" className="carousel-item">
                <img
                    src="https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png"/>
            </a>
        </div>
      </div>
      <div className="domainsSection">
        <h1>
          <center>Domains</center>
        </h1>
        <div className="domainsContainer">
          <div className="domainCardArea">
            <div className="domainCard">
              <div className="domainBorderTop"></div>
              <div className="domainBorderLeft"></div>
              <div className="domainBorderBottom"></div>
              <div className="domainBorderRight"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
