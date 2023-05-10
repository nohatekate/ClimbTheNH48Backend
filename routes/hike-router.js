


// DEPENDENCIES


const express = require('express')
const router = express.Router()
const hikeCtrl = require('../controllers/hike-controller')


// ROUTES


// HIKE INDEX ROUTE
router.get("/", hikeCtrl.index);


// HIKE CREATE ROUTE
router.post("/", hikeCtrl.create)

//HIKE DETAILS SHOW ROUTE
router.get("/:id", hikeCtrl.show);

//HIKE DELETE ROUTE
router.delete("/:id", (req, res, next) => {
	res.status(200).json({message: "HIKE destroy route", resource: req.params.id})
});

//HIKE UPDATE ROUTE
router.put("/:id", (req, res, next) => {
    console.log(req.body)
	res.status(200).json({message: "HIKE update route", resource: req.params.id})
});


module.exports = router

