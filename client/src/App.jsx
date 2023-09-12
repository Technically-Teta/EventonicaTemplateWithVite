import './App.css';
import Events from './components/events';
import React, {useState, useEffect} from 'react';

function App() {

  const [events, setEvents] = useState(false);
  return (
    <div className="App">
    <h1>Techtonica 2023 H2 events</h1>
  <Events />
  </div>

  )
  
}

export default App
