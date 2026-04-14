import User from "../models_/user.model.js"
import bcrypt from "bcrypt"
import { StatusCodes } from "http-status-pro-js"
import jwt from "jsonwebtoken"
async function login(req, res) {
    try {
        const {email,password } = req.body
        if(!email ||!password){
            return res.status(400).send("All field are required")
        }
        const user = await User.findById(email)
        if (!user) {
            return res.status(404).send("User not found")
        }
        const match = await bcrypt.compare(password, user.hashedPassword)
        if (!match) {
            return res.status(StatusCodes.BAD_REQUEST.code).json({
                code: StatusCodes.BAD_REQUEST.code,
                message: "Invalid password or email",
                data: null

            })
        }
        const token = jwt.sign({
            userId: user._id,
            email: user.email,
            role: user.role
        },
            "secretkey123",
            { expiresIn: "1h" }
        )
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                role: user.role,
                createdAt: user.createdAt
            }
        })
    } catch (error) {
        console.error(error)
        res.status(500).send("Server error")
    }
}
export default login

