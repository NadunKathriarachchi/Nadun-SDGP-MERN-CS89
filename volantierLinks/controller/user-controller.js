
const asyncHandler = require("express-async-handler");
const User = require("../models/user-model")
const Bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,password} = req.body;
    if(!username|| !email|| !password){
        res.status(404).json({ message: "All fields are mandatory" });
        return;
    }

    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(404).json({ message: "user Already exists" });
        return;
    }
    // hashpassword
    const hash = await Bcrypt.hash(password,10);
    console.log("Hash Password :  ",hash);

    const user = await User.create({
        username,
        email,
        password:hash
    })
    if(user){
        res.status(201).json({
            _id:user._id,
            username:user.username,
            email:user.email
        })
    }else{
        res.status(404).json({ message: "AInvalid User data" });
        return;
    }






})

const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    if(!email|| !password){
        res.status(404).json({ message: "All fields are mandatory" });
        return;
    
    }
     const user = await User.findOne({email});

    if(user &&(await Bcrypt.compare(password,user.password))){
        const accessToken = JWT.sign(
            {
                user:{
                    username:user.username,
                    email:user.email,
                    id:user.id
                }
            },
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        
        )
        res.status(200).json({
            accessToken
        })
       
    }else{
        res.status(401).json({ message: "Invalid User data" });
        return;
    
    } 
    

})
const currentUser = asyncHandler(async(req,res)=>{
    res.json(
        req.user
    );
})
module.exports = {registerUser,loginUser,currentUser}