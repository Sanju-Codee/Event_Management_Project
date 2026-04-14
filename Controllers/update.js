import bcrypt from "bcrypt"
import User from "../models_/user.model.js"

async function update_user(req, res) {
    try {
        const { id } = req.params
        const { first_name, last_name, password } = req.body

        const updateData = {}
        if (first_name) updateData.first_name = first_name
        if (last_name) updateData.last_name = last_name
        if (password) updateData.hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.findByIdAndUpdate(id, updateData, { new: true })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(200).json({
            message: "User updated successfully",
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
        if (error.name === 'CastError') {
            return res.status(400).json({ message: "Invalid user ID" })
        }
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
}

export default update_user
