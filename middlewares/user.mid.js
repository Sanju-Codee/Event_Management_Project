import Joi from "joi"
import { StatusCodes } from "http-status-pro-js"
function usermiddle(req, res, next) {
    try {
        const schema = Joi.object({
            first_name: Joi.string().alphanum().min(3).max(30).required(),
            last_name: Joi.string().alphanum().min(3).max(30).required(),
            email: Joi.string().email().max(30).required(),
            password: Joi.string().min(5).max(15).required()
        }).unknown(true);
        let { value, error } = schema.validate(req.body)
        if (error) {
            res.status(StatusCodes.BAD_REQUEST.code).json({
                code: StatusCodes.BAD_REQUEST.code,
                message: "Invalid email or password",
                data: null

            })        
            return;
        }
        req.body = value
        next()

    } catch (error) {
        console.log(error)
        return res.send(StatusCodes.BAD_REQUEST.code).json({
            code: StatusCodes.BAD_REQUEST.code,
            message: StatusCodes.BAD_REQUEST.message,
            data: null

        })
        next(error)
    }
}

export default usermiddle
// toon json 
