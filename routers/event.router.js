import express from "express"
import eventmiddle from "../middlewares/event.mid.js"
import create_event from "../Controllers/event.js"
let event = express.Router()
event.post("/create", eventmiddle, create_event.adding_event)

let showAllEvent=express.Router()
showAllEvent.get("/showevents",create_event.getAllEvents)

export default{event,showAllEvent}
