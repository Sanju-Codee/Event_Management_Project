import User from "../models_/user.model.js"
import bcrypt from "bcrypt"
import { StatusCodes } from "http-status-pro-js"
import jwt from "jsonwebtoken"

async function login(req, res) {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(StatusCodes.BAD_REQUEST.code).json({
                code: StatusCodes.BAD_REQUEST.code,
                message: "Email and password are required",
                data: null
            })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND.code).json({
                code: StatusCodes.NOT_FOUND.code,
                message: "User not found",
                data: null
            })
        }

        const match = await bcrypt.compare(password, user.hashedPassword)
        if (!match) {
            return res.status(StatusCodes.UNAUTHORIZED.code).json({
                code: StatusCodes.UNAUTHORIZED.code,
                message: "Invalid email or password",
                data: null
            })
        }

        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET || "secretkey123",
            { expiresIn: "1h" }
        )

        res.status(StatusCodes.OK.code).json({
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
        res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
            code: StatusCodes.INTERNAL_SERVER_ERROR.code,
            message: "Server error",
            data: null
        })
    }
}

export default login
