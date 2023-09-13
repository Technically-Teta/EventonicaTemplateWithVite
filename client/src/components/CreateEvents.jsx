import { useState } from "react";

const CreateEvents = (event) => {
const [events, setEvents] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    time: "",
    image: "",
    price: "",
    category: "",
    user_id: event.user_id,
}
)

   // SHOULD I DO THIS FOR ALL ROWS IN THE TABLE?
    const handleChange = (events) => {
        console.log("things changing")
        const {name, value} = events.target; //descruture whole object and get name and value from it
        setEvents({        //get whatexists in the event object
          ...events,
            [name]: value  //get the all of the above inf and create a property based on the name and get that value and save it value
        })
    }

    return(
    
        <div className="create-event">
            <div className="create-form">
                <h3>Create Event here!</h3>
                <button onClick={()=>setCreateEvent(false)}>X</button>
                <form>
                    <input type="submit" className="input-title"
                        required
                        placeholder="Add your event here"
                        name="title"
                        value={event.title}
                        onChange={handleChange}
                       />
                    <input type="submit" className="input-location"
                        location="location"
                        value={event.location}
                        onChange={handleChange}
                        />
                    <input type="submit" className="input-description"
                        description="description"
                        value={event.description}
                        onChange={handleChange}
                        />
                    <input type="submit" className="input-date"
                        date="date"
                        value={event.date}
                        onChange={handleChange}
                        />
                    <input type="submit" className="input-category"
                        category="category"
                        value={event.category}  
                        onChange={handleChange}
                       />
                    
    

                </form>


            </div>
           
            
    
        </div>
    )
    };

    export default CreateEvents;
