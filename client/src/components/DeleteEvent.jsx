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
  

    export default DeleteEvent 
