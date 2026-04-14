import Joi from "joi"
import { StatusCodes } from "http-status-pro-js"

function deletemiddle(req, res, next) {
    try {
        const schema = Joi.object({
            id: Joi.string().alphanum().min(3).max(50).required()
        })
        const { value, error } = schema.validate({ id: req.params.id })
        if (error) {
            return res.status(StatusCodes.BAD_REQUEST.code).json({
                code: StatusCodes.BAD_REQUEST.code,
                message: StatusCodes.BAD_REQUEST.message,
                data: null
            })
        }
        next()
    } catch (error) {
        console.error(error)
        return res.status(StatusCodes.BAD_REQUEST.code).json({
            code: StatusCodes.BAD_REQUEST.code,
            message: StatusCodes.BAD_REQUEST.message,
            data: null
        })
    }
}

export default deletemiddle
