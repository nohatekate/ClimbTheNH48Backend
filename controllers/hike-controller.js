const express = require('express')
const { Hike } = require('../models')
console.log(Hike)

// CONTROLLERS


// Hike INDEX ACTION
async function index(req, res, next) {
    try {
        res.json(await Hike.find({/* this is where I can pss in paramaters possibly to only show people for a specific user???*/}));
    } catch (error) {
        res.status(400).json(error);
    }
};

// Hike CREATE ACTION
async function create(req, res, next) {
    try {
        // create new hike
        res.json(await Hike.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
};

// Hike SHOW/HIKEDETAIL ACTION
async function getOne(req, res, next) {
    try {
        // send one hike
        res.json(await Hike.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// ... the remaining Hike controller actions will go below 

// Hike DESTROY ACTION 

// Hike UPDATE ACTION


// EXPORT Controller Action
module.exports = {
    index,
    create,
    show: getOne
}