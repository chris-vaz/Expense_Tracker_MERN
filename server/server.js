const express=require('express');
const app=express(); 
// Creating an instance of an express application^

const cors=require('cors');

require('dotenv').config({path:'./config.env'})

const port=process.env.PORT||8000;

//using middlewares
// Inside use is where we utilise our middlewares
app.use(cors());
app.use(express.json());

//mongodb connection
const con=require('./db/connection');


//using routes
app.use(require('./routes/expense.routes'));

con.then(db=>{
    if(!db) return process.exit(1);


// Listen to the HTTP Server
app.listen(port,()=>{
console.log(`Server is running on port: ${port}`)
})


app.on('error',err=>console.log(`Failed to connect with the HTTP Server:${err}`));
// If there is an error inside the mongodb connection

}).catch(error=>{
    console.log(`Connection Failed...!${error}`);
})