import './App.css';
import Events from './components/events';
import FormEvent from './components/form';
import {useState }from "react";


// want to see that we are sending the submit event is being sent to the parent from form componenet. so we need to pass the event to the parent.

const handlePostRequest = async (data) => {
  console.log("happening inside the app")

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };

const request = await fetch('http://localhost:8080/api/events', requestOptions);
const response = await request.json();
console.log(response);

}

function App() {
  return (
    <div className="App">
    <h1>Techtonica 2023 H2 events</h1>
  <Events />
  <FormEvent />
  </div>

  )
  
}

export default App
