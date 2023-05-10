const hikeRouter = require('./routes/hike-router')
// DEPENDENCIES

// initialize .env variables
require("dotenv").config();
require('./config/db.connection.js')

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;

// import express
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")

// create application object
const app = express();

//MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router
app.use(cors());
app.use(morgan("dev"))

//ROUTER MIDDLEWARE
app.use('/hike', hikeRouter)


// ROUTES
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});


// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));