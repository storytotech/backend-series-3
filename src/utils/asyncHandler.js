const asyncHandler = (fun)=>{
(error,req,res,next)=>{
    Promise.resolve(fun(error,req,res,next)).catch((error)=>{next(error)});
    
}
}

 