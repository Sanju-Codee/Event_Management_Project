import Event from "../models_/event.model.js"

async function adding_event(req, res) {
    try {
        const { Event_name, Category, Location, Event_Date, Starting_Time, Ending_Time, Price } = req.body
        if (!Event_name || !Category || !Location || !Event_Date || !Starting_Time || !Ending_Time || Price == null) {
            return res.status(400).json({ message: "All event fields are required" })
        }

        const event = await Event.create({
            Event_name,
            Category,
            Location,
            Event_Date,
            Starting_Time,
            Ending_Time,
            Price,
            CreatedAt: new Date().toISOString()
        })

        res.status(201).json({ message: "Event created successfully", event })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
}

async function getAllEvents(req, res) {
    try {
        const events = await Event.find()
        res.status(200).json(events)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
}

export default { adding_event, getAllEvents }
