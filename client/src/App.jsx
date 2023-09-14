import './App.css';
import Events from './components/events';
import EditUserForm from './components/edit';
import { useState,useEffect } from 'react';

function App() {
  const [editUse, setEditUse] = useState(false);
  // const [editUse, setEditUse] = useState({
  // title: ' ',
  // location: ' ',
  // }

  useEffect(() => {
    fetch("http://localhost:8080/api/events")
    .then((response) => response.json())
    .then(events => {
      console.log(events);
      setEditUse(events);
     })
     .catch((error) => {
       console.log(error);
     });
    }, []);

const handleEdit = (event) => {
console.log("this is the updated edit",event);
}

  return (
    <div className="App">
    <h1>Techtonica 2023 H2 events</h1>
  <Events />
    <div className='edit-form'>   
  <EditUserForm editUse={editUse} onSubmit={handleEdit}  />

   </div>

    </div>

  )
  
}

export default App