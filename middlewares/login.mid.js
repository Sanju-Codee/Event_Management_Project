import Joi from "joi"
import { StatusCodes } from "http-status-pro-js"
function loginmiddle(req, res, next) {
    try {
        const schema = Joi.object({
             _id: Joi.string().length(24).hex().required()

        }).unknown(true);
        let { value, error } = schema.validate(req.body)
        if (error) {
            res.status(StatusCodes.BAD_REQUEST.code).json({
                code: StatusCodes.BAD_REQUEST.code,
                message: StatusCodes.BAD_REQUEST.message,
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

export default loginmiddle
// toon json 