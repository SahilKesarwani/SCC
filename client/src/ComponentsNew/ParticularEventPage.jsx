import React, { useState } from "react";
import { useParams } from "react-router-dom";
import eventsListApi from "../apis/eventsListApi";

export default function ParticularEventPage() {
  const { eventName } = useParams();
  const [flag, setFlag] = useState();
  return (
    <>
      {eventsListApi.map((events) => {
        const {
          id,
          name,
          time,
          date,
          description,
          imageURL,
          domainOfEvent,
          totalParticipants,
          sponsors,
          winners,
          examiner,
          googleSheetLink,
        } = events;
        if(eventName==name){
        return (
          <div key={id} style={{ border: "1px solid black" }}>
            <div>{name}</div>
            <br />
            <div>{time}</div>
            <br />
            <div>{date}</div>
            <br />
            <div>{description.slice(0, 50)}...</div>
            <br />
            <div>
              {imageURL.map((url) => {
                return <div>{url.imgURL}</div>;
              })}
            </div>
            <br />
            <div>{domainOfEvent}</div>
            <br />
            <div>{totalParticipants}</div>
            <br />
            <div>{sponsors}</div>
            <br />
            <div>
              {winners.map((win) => {
                return (
                  <div>
                    <b>{win.teamName}</b>
                    {win.teamMembers.map((winn) => {
                      return (
                        <div>
                          {winn.Name} {winn.Batch}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <br />
            <div>{examiner}</div>
            <br />
            <div>{googleSheetLink}</div>
            <br />
          </div>
        );}
      })}
    </>
  );
}

{
  /* {events.imageURL[0].imgURL}<br/>
            {events.imageURL[1].imgURL}<br/> */
}
