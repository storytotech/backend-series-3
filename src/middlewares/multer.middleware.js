 import multer from "multer"


 const storage  =  multer.diskStorage({
    destination : function (req,file,cb){
      cb(null,"./public/temp")
    },
    filename : function (req,file,cb){
      cb(null,new Date.now() +"_" + file.originalname)
    }
    
 })

 const upload = multer({storage : storage})

 export {upload}