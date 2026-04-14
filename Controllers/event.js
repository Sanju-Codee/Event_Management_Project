import Event from "../models_/event.model.js"
async function adding_event(req, res) {
    try {
        const { Event_name,Category,Location,Event_Date,Starting_Time,Ending_Time,Price } = req.body
        if (!Event_name ||!Category ||!Location ||!Event_Date ||!Starting_Time ||!Ending_Time ||Price===undefined||Price === "") {
            return res.status(400).send("All fields are required")
        }
        if(Price<0){
            return res.status(400).send("Price value must be greater than or equal to 0")
        }
        if(Price=="free" || Price=="free"){
            return res.status(400).send("If the Event is free then give 0 value in Price")
        }
        const check = await Event.findOne({
            Event_name: Event_name,
            Category: Category,
            Location: Location,
            Event_Date: new Date(Event_Date),
            Starting_Time:Starting_Time,
            Ending_Time:Ending_Time,
            Price:Number(Price)
        })
        if (check) {
            return res.status(409).send("Event already exits in this timeline and at this location")
        }

        const new_event={
            Event_name: Event_name,
            Category: Category,
            Location: Location,
            Event_Date: Event_Date,
            Starting_Time:Starting_Time,
            Ending_Time:Ending_Time,
            Price:Number(Price)
        }
        await Event.create(new_event)
        res.status(201).send("Event created successfully")
        console.log(new_event)
    } catch (error) {
        console.error(error)
        res.status(500).send("Server error")
    }
}
async function getAllEvents(req,res){
    try{

        const { sort, category } = req.query;
        let filter = {};
        let sortOption = {};

        if (category) {
            const categories = category.split(",");
            filter.Category = { $in: categories };
        }
        if (sort === "price_asc") {
            sortOption.Price = 1;
        } else if (sort === "price_desc") {
            sortOption.Price = -1;
        } else {
            sortOption.Event_Date = 1;
        }

        const all_events = await Event.find(filter).sort(sortOption);
        res.status(200).json(all_events);

    } catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
}
export default{adding_event,getAllEvents}