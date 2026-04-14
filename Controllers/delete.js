import User from "../models_/user.model.js"
async function delete_user(req, res){
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(202).send("Delete successfully")
    } catch (error) {
        console.error(error)
        res.status(500).send("Server error")
    }
}
export default delete_user