const mongoose = require('mongoose');

const BunnySchema = new mongoose.Schema({
    //name of person who upload
    name:{
        type: String
    },

    img:{
        type: String
    },

    description:{
        type: String
    },

}, { timestamps: true })

module.exports = mongoose.model("bunny", BunnySchema);