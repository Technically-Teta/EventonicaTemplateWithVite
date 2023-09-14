import { useRef } from "react";

const FormEvent =() => {

//const [event, setEvents] = useState({title: "", location: "", eventtime: "", eventdescription: "", category: ""});
const userTitle = useRef()
const userLocation = useRef();
const userEventDescription = useRef();
const userCategory = useRef();

//creates a function to handle the form submission
const handleSubmit = (e) => {
    e.preventDefault();

//checks if there is a value in these user fields. if there is get that value, if there is not. No action is taken.
    const userEvent = {title: userTitle.current?.value, location: userLocation?.current.value, eventtime:  new Date() , eventdescription: userEventDescription.current?.value, category: userCategory?.current?.value};
    //console.log("Inside the component", userEvent);
    props.submit(userEvent);
   
}



   
return(
    <form onSubmit={handleSubmit}>
        <h2> Please register your next Event in our community</h2>

        <label>Event Title</label>
        <input type="text" name="title" required placeholder="Title of your Event" ref={userTitle}/>

        <label>Event Location</label>
        <input type="text" name="location" required placeholder="Where will be your event" ref={userLocation}/>

        <button type="submit">Submit</button>
    </form>

)

}


export default FormEvent;