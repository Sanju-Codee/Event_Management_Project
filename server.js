import dotenv from "dotenv";
dotenv.config();

import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import User from "./models_/user.model.js"

//Calling routes
// import user_Register from "./Controllers/userRegister.js"
// import login from "./Controllers/login.js"
// import update from "./Controllers/update.js"
// import delete_user from "./Controllers/delete.js"
// import add_event from "./Controllers/event.js"
import user_register from "./routers/user.routers.js"
import showusers from "./routers/user.routers.js"
import update_user from "./routers/update_user.router.js"
import delete_user from "./routers/delete.router.js"
import login from "./routers/login.router.js"
import add_event from "./routers/event.router.js"
import show_events from "./routers/event.router.js"

const app=express()
const PORT=process.env.PORT

console.log(process.env.MONGO_URI);
//connection
mongoose.connect(process.env.MONGO_URI).then(()=> console.log("MongoDB connected")).catch(err=> console.log("Error",err))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors({
    origin: "https://imsrthk19.github.io",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

//Routes
app.get("/",(req,res)=>{
    res.status(200).send("Event Booking API is running")
})
app.use("/api/v1",showusers.showUser)
// app.post("/api/register",user_Register)
app.use("/api/v1/user",user_register.create_users)
app.use("/api/v1/user",update_user)
app.use("/api/v1/user",delete_user)
app.use("/api/v1/user",login)
app.use("/api/v1/event",add_event.event)
app.use("/api/v1/event",show_events.showAllEvent)
// localhost:808/v1/users/id/comments/id

// app.patch("/update/:id",update)
// app.delete("/delete/:id",delete_user)

app.listen(PORT,()=>{
    console.log("Server started")
}) 
/// user.model , todo.model, 
/// localhost:8080/v1/user/login
// 