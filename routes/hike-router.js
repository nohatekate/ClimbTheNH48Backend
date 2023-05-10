


// DEPENDENCIES


const express = require('express')
const router = express.Router()


// ROUTES


// HIKE INDEX ROUTE
router.get("/", (req, res, next) => {
	res.status(200).json({message: "HIKE index route"})
});


// HIKE CREATE ROUTE
router.post("/", (req, res, next) =>  {
    console.log("test data", req.body)
	res.status(201).json({message: "HIKE create route"})
});

//HIKE SHOW ROUTE
router.get("/:id", (req, res, next) => {
	res.status(200).json({message: "HIKE detail route", resource: req.params.id})
});

//HIKE SHOW ROUTE
router.delete("/:id", (req, res, next) => {
	res.status(200).json({message: "HIKE destroy route", resource: req.params.id})
});

//HIKE UPDATE ROUTE
router.put("/:id", (req, res, next) => {
    console.log(req.body)
	res.status(200).json({message: "HIKE update route", resource: req.params.id})
});


module.exports = router

