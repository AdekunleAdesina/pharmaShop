const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        maxLength:256,
        minLength:15,
        lowercase:true
    }
})

module.exports = mongoose.model("User", userSchema)