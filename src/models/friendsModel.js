const mongoose = require("mongoose");

const friendSchema = mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique: ["alredy exist",true]
    },
    mob: {
        type:Number,
        required:true,
    },
    adress: {
        type:String,
        required:true
    }
})


module.exports = new mongoose.model("Friend",friendSchema)

