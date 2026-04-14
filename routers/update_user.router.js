import express from "express"
import update_middleware from "../middlewares/update.mid.js"
import update_user from "../Controllers/update.js"
let update_user_route=express.Router()
update_user_route.patch("/update/:id",update_middleware,update_user)

export default update_user_route
