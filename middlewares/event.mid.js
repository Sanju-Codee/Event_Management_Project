import Joi from "joi"
import { StatusCodes } from "http-status-pro-js"
function usermiddle(req, res, next) {
    try {
        const schema = Joi.object({
            Event_name: Joi.string().required(),
            Category: Joi.string().required(),
            Location: Joi.string().required(),
            Event_Date: Joi.date().iso().required(),
            Starting_Time: Joi.string().required(),
            Ending_Time: Joi.string().required(),
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
        return res.status(StatusCodes.BAD_REQUEST.code).json({
            code: StatusCodes.BAD_REQUEST.code,
            message: StatusCodes.BAD_REQUEST.message,
            data: null

        })
        next(error)
    }
}

export default usermiddle
// toon json 