import mongoose from "mongoose"

const event_schema=new mongoose.Schema({
    Event_name:{
        type:String,
        required:true,
    },
    Category:{
        type:String,
        required:true,
    },
    Location:{
        type:String,
        required:true,
    },
    Event_Date:{
        type:Date,
        required:true,
    },
    Starting_Time:{
        type:String,
        required:true,
    },
    Ending_Time:{
        type:String,
        required:true,
    },
    Price:{
        type:Number,
        required:true,
    },
    CreatedAt:{
        type:String,
    },
})

const Event=mongoose.model("Event",event_schema)

export default Event