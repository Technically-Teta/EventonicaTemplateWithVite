import './App.css';
import Events from './components/events';
import React, {useState, useEffect} from 'react';
import Eventsheader from './components/Eventsheader';

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

function createEvent(){
  let title = prompt("What is the title of the event?");
  let description = prompt("What is the description of the event?");
  let date = prompt("What is the date of the event?");
  let category = prompt("type the category of the event?");
  fetch("http://localhost:8080/api/events", { 
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({title, description,date,category}),
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




  return (
    <div className="App">
      <Eventsheader eventname = {'Supreme Events'} />
    <h1>Techtonica 2023 H2 events</h1>

    {events? <Events events={events} /> : <h2>Loading...</h2>}
    <button className='btn' onClick={createEvent}>Create Event</button>
    <br />
    <button  className='btn' onClick={deleteEvents}>Delete Event</button>
  
  </div>

  );
  
}

export default App
