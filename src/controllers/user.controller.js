import { asyncHandler } from "../utils/asyncHandler.js";

const registerUSer = asyncHandler(async(req,res,next)=>{
    res.status(200).json({
        message : "ok"
    })
})
export default registerUSer;

