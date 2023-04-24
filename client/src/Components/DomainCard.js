const DomainCard = ({title, imgSrc, description,domainClickButton}) => {
  return (
    <>
      <div className="parentr">
        <div className="leftr"></div>
        <div className="rightr"></div>
        <div className="topr"></div>
        <div className="bottomr"></div>
        <div className="cardr">
          <img src={imgSrc} />
          <div className="content">
            <h5>{title}</h5>
            <p>{description}</p>
            <div className="btn" onClick={()=>domainClickButton(title)}>Know More</div>
          </div>
          <div className="overlayr"></div>
        </div>
      </div>
    </>
  );
};
export default DomainCard;
