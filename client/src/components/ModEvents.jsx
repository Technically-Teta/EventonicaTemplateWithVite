import TickIcon from "./tickIcon";

const ModEvents = (event) => {

    return(
    
        <div className="modevents">
            <div className=" mod-item">
                <div className="info-container">
                <TickIcon/> 
                </div>
            </div>

            <p>
                {event.title}
            </p>
            <div className="button-container">
                <button> Edit Event</button>

            </div>
    
        </div>
    )
    };

    export default ModEvents;
