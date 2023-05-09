// ./routes/people-router.js


// DEPENDENCIES


const express = require('express')
const router = express.Router()


// ROUTES


// HIKE INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "HIKE index route"})
});


// HIKE CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "HIKE create route"})
});

module.exports = router

