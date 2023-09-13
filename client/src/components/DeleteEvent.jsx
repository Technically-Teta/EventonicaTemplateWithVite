function DeleteEvent() {
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

    const DeleteEvent = () => {

      return (
        <div>
          <button onClick={DeleteEvent}>Delete Event</button>
        </div>
      );


      
    };
  
  

    export default DeleteEvent 
