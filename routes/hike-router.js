
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
router.get("/:id", hikeCtrl.getOne);

//HIKE DESTROY ROUTE
router.delete("/:id", hikeCtrl.delete);

//HIKE UPDATE ROUTE
router.put("/:id", hikeCtrl.update);


module.exports = router

