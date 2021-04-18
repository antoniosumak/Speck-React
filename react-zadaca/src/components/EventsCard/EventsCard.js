import React from "react";
import "./EventsCard.scss";
import Button from "../Button/Button"

const EventsCard = ({
    title, 
    location, 
    dateTime, 
    seats, 
    firm,
    buttonText,
}) => {
    return (
        <div className="Event">
        <h2 className="Event-Title">{title}</h2>
        <div className="Event-Content">
          <div className="Event-ContentRow">
            <div className="Event-Item">
              <h3 className="Event-ItemTitle">Lokacija</h3>
              <p className="Event-ItemValue">{location}</p>
            </div>
            <div className="Event-Item">
              <h3 className="Event-ItemTitle">Datum i vrijeme</h3>
              <p className="Event-ItemValue">{dateTime}</p>
            </div>
          </div>
          <div className="Event-ContentRow">
            <div className="Event-Item">
              <h3 className="Event-ItemTitle">Slobodna mjesta</h3>
              <p className="Event-ItemValue">{seats}</p>
            </div>
            <div className="Event-Item">
              <h3 className="Event-ItemTitle">Firma</h3>
              <p className="Event-ItemValue">{firm}</p>
            </div>
          </div>
        </div>
        <Button text={buttonText}/>
        </div>
     );
}
 
export default EventsCard;