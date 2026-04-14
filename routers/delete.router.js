import express from "express"
import deletemiddle from "../middlewares/delete.mid.js"
import user_delete_register from "../Controllers/delete.js"
let delete_users = express.Router()
delete_users.delete("/delete/:id", user_delete_register)

export default delete_users
