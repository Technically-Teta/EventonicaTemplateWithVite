//This is the minimal express server. 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const db = require('./db/db-connection.js'); 

const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("Hello Techtonica 2023 H2 to your Server for Eventonica");
  });


app.get('/api/events', async (req, res) =>{

    //real connection with the DB eventonica
    try{
        const { rows: events } = await db.query('SELECT * FROM events');
        console.log("in the server", events);
        res.send(events);

    } catch(error){
        console.log(error);
        return res.status(400).json({error});

    }


    
})

app.post('/api/events', async (req, res) => {
    // const userData = req.body;
    // console.log("from the server line 43", userData);
    // post requets shouuld have a try catch
    try{
        const {title, location, eventtime, eventdescription, category}  = req.body;
        //suntax for the db query =await db.query ("".[]) which is a function that takes two parameters, the quesry and the array of values
        const { rows: events } = await db.query('INSERT INTO events (title, location, eventtime, eventdescription, category) VALUES ($1,$2,$3,$4,$5)',
    // in an array you are adding each one of the values in the array
        [title, location, eventtime, eventdescription, category]
    

);    
        console.log("in the server", rows[0]);
       res.send(rows[0]);
}  catch (error) {
     console.log(error);
     res.status(400).json({error});

}
})

app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));