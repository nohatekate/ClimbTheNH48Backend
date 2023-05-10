const mongoose = require("mongoose");

const HikeSchema = new mongoose.Schema({
    mountain: {type: String, required: true},
    date: {type: String, required: true},
    comments: String,
    summit: Boolean, 
    image: String,
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }  
}, {
    timestamps: true
});


const Hike = mongoose.model("Hike", HikeSchema)

module.exports = Hike