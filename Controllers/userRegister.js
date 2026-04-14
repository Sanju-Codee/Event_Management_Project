import bcrypt from "bcrypt"
import User from "../models_/user.model.js"

async function user_register(req, res) {
    try {
        const { first_name, last_name, email, password } = req.body
        if (!first_name || !email || !password) {
            return res.status(400).json({
                message: "first_name, email, and password are required"
            })
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).json({
                message: "Email is already registered"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            first_name,
            last_name,
            email,
            hashedPassword,
            role: "user",
            createdAt: new Date().toISOString()
        })

        res.status(201).json({
            message: "User registered successfully",
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
        res.status(500).json({ message: "Server error" })
    }
}

async function showAllUsers(req, res) {
    try {
        const users = await User.find({}, { hashedPassword: 0 })
        res.status(200).json(users)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
}

export default { user_register, showAllUsers }
