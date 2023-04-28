const EventListData = ({ name,time, date }) => {
  return (
    <>
      <div className="eventContainer">
        <div className="eventName">{name}</div>
        <div className="eventDateandTime">
          <div className="eventTime">{time}</div>
          <div className="eventDate">{date}</div>
        </div>
      </div>
    </>
  );
};
export default EventListData;
