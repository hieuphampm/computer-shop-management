const mongoose = require('mongoose')


Const userSchema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        unique : true,
        require : true
    },
    password : string,
    profilePic : String

},{
    timestamps : true

})


const userModel = mongoose.model("user",userSchema)


module.exports = userModel
