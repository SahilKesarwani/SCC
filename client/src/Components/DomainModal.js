const DomainModal = ({ title }) => {
  let title2 = title.replaceAll(" ", "");
  return (
      <>
      <div id={title2} className="modall">
        <div className="closeModal"></div>
        <div className="modalArea">
          <div className="roadmapContainerArea" style={{right: "0vw"}} id="roadmapContainerArea">
          <p>I'm Domain Modal for {title}</p>
            RoadMap Container</div>
          <div className="videoContainerArea" style={{left: "80vw"}} id="videoContainerArea">Video Container</div>
          <div className="nextSectionArrow" id="nextSectionArrow" style={{rotate:"0deg"}}>
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default DomainModal;
