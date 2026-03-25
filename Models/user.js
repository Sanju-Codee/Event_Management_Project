import mongoose from "mongoose"

const userschema=new mongoose.Schema({
    id:{
        type:String,
    },
    name:{
        type:String,
        required:true,
    },
    last_name:{
        tpye:String,
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

module.exports=User