import './App.css';
import Events from './components/events';
import React, {useState, useEffect} from 'react';
import Eventsheader from './components/Eventsheader';
import ModEvents from './components/ModEvents';
import CreateEvents from './components/CreateEvents';
import DeleteEvent from './components/DeleteEvent';
import FormEvent from './components/form';

// if create event is clicked, it will redirect to the create event page, SET UP CORRECTLY? DO THE SAME FOR EDIT AND DELETE?
function App() {


  const [events, setEvents] = useState(false);
  const [createEvent, setCreateEvent] = useState(false);
  

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
    body: JSON.stringify({id,title, location, eventdescription, eventtime ,category}),
      })
      .then(response => {
        return response.text();
      })
    
      .then(events => {
        alert(events);
        getRequest();
      });
  




  return (
    <div className="App">
      <Eventsheader eventname = {' Brought to you from Supreme Events...'} />
    <h1>Techtonica 2023 H2 events</h1>
     {sortedEvents?.map((event)=>  <ModEvents key={event.id} event={event}  />)}
    {events? <Events events={events}   /> : <h2>Loading...</h2>}
    <button className='btn' onClick={() =>setCreateEvent(true)}>Add New Event</button>
    <br />
    <button  className='btn' onClick={DeleteEvent}>Delete Event</button>
     <TickIcon />
     {CreateEvents &&<CreateEvents setCreateEvent={setCreateEvent} />}
     <FormEvent/>
  </div>

  );
  
  
};

export default App
