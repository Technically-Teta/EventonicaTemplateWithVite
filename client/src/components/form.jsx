//insert into 
import {useState, useRef} from "react";

const FormEvent = () => {

    //const [event, setEvents] = useState({title: "", location: "" ,eventdescription: "", eventtime: "", category: ""});
    return (

        <div>
            <form>
                <h2>Add your next here!</h2>    
                <label>Title</label>
                <input type="text" name="title" id="title" required placeholder="Title of your event"/>

            </form>
            
        </div>
    )







}

export default FormEvent;