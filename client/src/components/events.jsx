import { useState, useEffect } from "react";
import EventCard from "./event";
import CardGroup from 'react-bootstrap/CardGroup';




  return (
    <div>
    <CardGroup className="Events">
            {events.map(event =>
            <EventCard key={event.id} title={event.title} location={event.location} time={event.eventtime} eventdescription={event.eventdescription} category ={event.category}/>
            )}
    </CardGroup>
         


    </div>
  );


export default Events;