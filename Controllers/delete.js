import User from "../models_/user.model.js"

async function delete_user(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(202).json({ message: "Delete successfully" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
}

export default delete_user
