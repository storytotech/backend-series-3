import mongoose ,{Schema,model} from "mongoose"

const newSchema = new Schema({
   username : {
    type : String,
    required : true,
    unique : true,
    lowercase : true,
    trim : true,
    index : true
   },
   email : {
    type : String,
    lowercase : true,
    trim : true,
    index : true,
    required : true,
    unique : true
   },
   avatar : {
 type : String, // cloudinary,
 required : true,
   },
   coverImage : {
    type : Stirng , // cloudinary
   },
   watchHistory : {
    type : Schema.Types.ObjectId,
    ref : "Video"
   },
   password :{
    type : String,
    required : [true,"password is required"]
   },
   refreshToken : {
    type : string,
   }
},{timestamps: true})
newSchema.pre("save", async function (next){
  if(!this.isModifeid("password")) return next();
  this.password = await bcrypt.hash(this.password,10)
  next();
})
newSchema.methods.isPasswordCorrect = async function (password){
return await bcrypt.compare(password,this.password)
}
newSchema.methods.generateAccesToken = function (){
 return  Jwt.sign(
    {
      _id : this._id,
      username : this.username,
      email : this.username,
      
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    },
  )
} // "Here, we are creating a JWT (JSON Web Token) for secure user authentication."
newSchema.methods.generateRefrshToken = function (){
   return  Jwt.sign(
    {
      _id : this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    },
  )
}
const User = model("User",newSchema)

export {User}