import express from "express"
import usermiddle from "../middlewares/user.mid.js"
import user_register from "../Controllers/userRegister.js"
let create_users = express.Router()
create_users.post("/register", usermiddle, user_register.user_register)

let showUser=express.Router()
showUser.get("/users",user_register.showAllUsers)
export default {create_users,showUser}
