import mongoose from "mongoose"

const userschema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    hashedPassword:{
        type:String,
        required:true
    },
    role:{
        type:String
    },
    createdAt:{
        type:String,
    },
})

const User=mongoose.model("user",userschema)

export default User