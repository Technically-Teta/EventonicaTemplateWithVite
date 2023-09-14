import { useState } from "react";

function EditUserForm(props){
//initalizes state to store user data
const [user, setUser] = useState(props.initialData);

//updates state with user data
const handleInputChange = (event) => {   
//destrutures user data extracts  properties the event object has
    const {name, value} = event.target;
// this will update the state field with the new value
setUser({...user, [name]: value});

}

const handleFormSubmit = (event) => {
    event.preventDefault();
    // this is a callback function that will hand the updated data   
    props.onSubmit(user);
};

return (

<form onSubmit={handleFormSubmit}>
    <div>
    <label htmlFor="title">title: </label>
    <input type="text" id="name" name="title" value={user.name} onChange={handleInputChange}/>
    </div>
    <div>
    <label htmlFor="location">location: </label>
    <input type="text" id="name" name="title" value={user.name} onChange={handleInputChange}/>
    </div>
    <button type="submit">Edit</button>
</form>    

)



}


export default EditUserForm;