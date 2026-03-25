import express from "express"
import fs from "fs"
import mongoose from "mongoose"
import bcrypt from "bcrypt"

const app=express()
const PORT=8006

//connection
mongoose.connect('mongodb://127.0.0.1:27017/Event-managment').then(()=> console.log("MongoDB connected")).catch(err=> console.log("Error",err))

const userschema=new mongoose.Schema({
    id:{
        type:String,
    },
    name:{
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

app.use(express.urlencoded({extended:false}))

//Routes
app.get("/",(req,res)=>{
    res.status(200).send("Event Booking API is running")
})
app.get("/users",async (req,res)=>{
    const allusers=await User.find({})
    res.status(302).json(allusers)
})
app.post("/api/register",async (req,res)=>{
    let users=[]
    const {name,last_name,email,hashedPassword}=req.body
    if(!name ||!last_name ||!email ||!hashedPassword){
        return res.status(402).send("All fields are required")
    }
    if(fs.existsSync("user.json")){
        users = JSON.parse(fs.readFileSync("user.json","utf-8"));
        let isData = users.find(a=> a.email===email)
        if(isData){
            return res.status(409).send("user Already exist");
        }
    }
    const newuser={
        id:Date.now(),
        name,
        last_name,
        email,
        hashedPassword,
        role:"user",
        createdAt:new Date()
    }
    // users.push(newuser)
    // fs.writeFile("user.json",JSON.stringify(users),(err,data)=>{
    //     res.status(201).send("User created successfully")
    // })
    const ress=await User.create(newuser)
    res.status(201).send("User created successfully")
    console.log(newuser)
})
app.get("/login/:id",async (req,res)=>{
    // const id=Number(req.params.id)
    // const users=JSON.parse(fs.readFileSync("user.json","utf-8"))
    // const user=users.find((user)=>user.id===id)
    const user=await User.findById(req.params.id)
    if(!user){
        res.status(404).send("User not found")
    }
    res.status(302).json(user)
})
app.patch("/update/:id",async (req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{last_name: "Changed"})
    res.status(202).send("Update successfully")
})
app.delete("/delete/:id",async (req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.status(202).send("Delete successfully")
})

app.listen(PORT,()=>{
    console.log("Server started")
})