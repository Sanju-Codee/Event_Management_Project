import express from "express"
import loginmiddle from "../middlewares/login.mid.js"
import user_login from "../Controllers/login.js"
let login_users = express.Router()
login_users.get("/login", loginmiddle, user_login)

export default login_users
