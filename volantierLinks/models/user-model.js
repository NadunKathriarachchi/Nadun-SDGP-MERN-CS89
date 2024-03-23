const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please add the username"]
    },
    email:{
        type:String,
        required:[true, "Please add the email"],
        unique: [true,"Email address already Taken"],
    },
    password:{
        type:String,
        required:[true, "Please add the user password"]
    },
    dateOfBirth:{
        type:Date,
        required:[true, "Please add the user date of birth"]
    }
    ,
    contactNo:{
        type:String,
        required:[true, "Please add the user contact no"]
    }
    ,
    address:{
        type:String,
        required:[true, "Please add the user address"]
    }
},{
    timestamps:true,
}

);

module.exports = mongoose.model("User",userSchema)