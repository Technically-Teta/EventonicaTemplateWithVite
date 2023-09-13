const ModEvents = (event) => {

    return(
    
        <div className="modevents">
            <div className=" mod-item">
                <div className="info-container">
                <TickIcon/> 
                </div>
            </div>

            <p>
                {event.id}
                {event.title}
                {event.location}
                {event.eventtime}
                {event.description}
                {event.category}
            </p>
          
    
        </div>
    )
    };

    export default ModEvents;
