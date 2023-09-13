const express = require('express');
const app = express();
const PORT = 8080;

const db = require('./config/connection');
//ADDITIONAL CONFIGURATION FROM TUTORIALL
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});



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



app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));