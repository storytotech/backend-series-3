const asyncHandler = (fun)=>{
 return (error,req,res,next)=>{
    Promise.resolve(fun(error,req,res,next)).catch((error)=>{next(error)});
    
}
}

export {asyncHandler}
 