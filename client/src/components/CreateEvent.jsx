

const CreateEvents = (event) => {
    const handleChange = (event) => {
        console.log("things changing")
    }

    return(
    
        <div className="create-event">
            <div className="create-form">
                <form>
                    <input type="submit" className="input-title"
                        required
                        placeholder="Add your event here"
                        name="title"
                        value={""}
                        onChange={handleChange}
                       />
                    <input type="submit" className="input-location"
                        location="location"
                        value={""}
                        onChange={handleChange}
                        />
                    <input type="submit" className="input-description"
                        description="description"
                        value={""}
                        onChange={handleChange}
                        />
                    <input type="submit" className="input-date"
                        date="date"
                        value={""}
                        onChange={handleChange}
                        />
                    <input type="submit" className="input-category"
                        category="category"
                        value={""}  
                        onChange={handleChange}
                       />
                    
    

                </form>


            </div>
           
            
    
        </div>
    )
    };

    export default CreateEvents;
