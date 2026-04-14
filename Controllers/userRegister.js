import User from "../models_/user.model.js"
import bcrypt from "bcrypt"
// import User from "../models/user.model.js"
async function user_register(req, res) {
    try {
        let users = []
        const { first_name, last_name, email, password } = req.body
        if (!first_name || !last_name || !email || !password) {
            return res.status(402).send("All fields are required") // middleware
        }

        const check = await User.findOne({
            email: email
        })
        if (check) {
            return res.status(409).send("User already exits")
        }

        let salt = await bcrypt.genSalt(10)
        let hashedPassword = await bcrypt.hash(password, salt)
        const newuser = {
            first_name,
            last_name,
            email,
            password,hashedPassword,
            role: "user",
            createdAt: new Date()
        }
        const ress = await User.create(newuser)
    
        res.status(201).send("User created successfully")
        console.log(newuser)
    } catch (error) {
        console.error(error)
        res.status(500).send("Server error")
    }
}
async function showAllUsers(req, res) {
    try {
       const allUsers=await User.find({})
       if(allUsers.length===0){
        res.status(200).send("No users found")
       }
       res.status(200).json(allUsers)
    } catch (error) {
        console.error(error)
        res.status(500).send("Server error")
    }
}
export default {user_register,showAllUsers}