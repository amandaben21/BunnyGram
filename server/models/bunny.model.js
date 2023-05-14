const mongoose = require('mongoose');

const BunnySchema = new mongoose.Schema({
    //name of person who upload
    name:{
        type: String,
        require: [true, "Your name is required"],
        minlength: [3, "Your name must be at least 3 characters long"]
    },

    img:{
        type: String,
        require: [true, "Picture is required"]
    },

    desc:{
        type: String
    },

}, { timestamps: true })

module.exports = mongoose.model("bunny", BunnySchema);