import User from "../models_/user.model.js"
import bcrypt from "bcrypt"
async function update(req, res) {
    try {
        const { first_name, last_name, password } = req.body
        let salt = await bcrypt.genSalt(10)
        let hashedPassword = await bcrypt.hash(password, salt)
        await User.findByIdAndUpdate(req.params.id, { first_name: first_name, last_name: last_name, hashedPassword: hashedPassword })
        res.status(202).send("Update successfully")
    } catch (error) {
        console.error(error)
        res.status(500).send("Server error")
    }
}
export default update