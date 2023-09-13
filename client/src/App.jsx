import './App.css';
import Events from './components/events';
import React, {useState, useEffect} from 'react';
import Eventsheader from './components/Eventsheader';
import ModEvents from './components/ModEvents';

function App() {

  const [events, setEvents] = useState(false);
  

    const getRequest = () => {
      fetch("http://localhost:8080/api/events")
      .then((response) => response.json())
      .then(events => {
        setEvents(events); 
        console.log('Events fetched...', events);
        });
    }

    useEffect(() => {getRequest()}, []);

    fetch("http://localhost:8080/api/events", { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title, location, eventdescription, eventtime ,category}),
      })
      .then(response => {
        return response.text();
      })
    
      .then(events => {
        alert(events);
        getRequest();
      });
  }



function deleteEvents() {
  let id = prompt('Enter event id');
  fetch(`http://localhost:8080/api/events/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      return response.text();
    })
    .then(events => {
      alert(events);
      getRequest();
    });
}


    const sortedEvents = events ?.sort((a, b) => new Date(b.eventtime) - new Date(a.eventtime));

  return (
    <div className="App">
      <Eventsheader eventname = {' Brought to you from Supreme Events...'} />
    <h1>Techtonica 2023 H2 events</h1>
     {sortedEvents?.map((event)=>  <ModEvents key={event.id} event={event}  />)}
    {events? <Events events={events}   /> : <h2>Loading...</h2>}
    <button className='btn' onClick={createEvent}>Add New Event</button>
    <br />
    <button  className='btn' onClick={deleteEvents}>Delete Event</button>
  
  </div>

  );
  
  };

export default App
