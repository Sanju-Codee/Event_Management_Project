import Joi from "joi"
import {StatusCodes} from "http-status-pro-js"
function update_middleware(req,res,next){
    try{
        const schema=Joi.object({
            first_name: Joi.string().alphanum().min(3).max(30),
            last_name: Joi.string().alphanum().min(3).max(30),
            hashedpassword: Joi.string().min(6)
        }).unknown(true)
        let {value,error}=schema.validate(req.body)
        if(error){
            res.status(StatusCodes.BAD_REQUEST.code).json({
                code: StatusCodes.BAD_REQUEST.code,
                message: StatusCodes.BAD_REQUEST.message,
                data: null
            })
            return;
        }
        req.body=value
        next()
    }catch(error){
         console.log(error)
        return res.status(StatusCodes.BAD_REQUEST.code).json({
            code: StatusCodes.BAD_REQUEST.code,
            message: StatusCodes.BAD_REQUEST.message,
            data: null

        })
        next(error)

    }
}
export default update_middleware