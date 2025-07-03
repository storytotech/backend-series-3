import mongoose from "mongoose"
// import dotenv from "dotenv"
import { DB_NAME } from "../constants.js"
import express from "express"
const app = express()
// dotenv.config()

const connectDb = async()=>{
    try{
      const connectionInstance =  await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
      console.log(connectionInstance.connection.host);
      console.log(connectionInstance.connection.port);
      console.log(connectionInstance.connection.name);
    //   app.on("error",(error)=>{
    //     console.log("ERRROR",error);
    //     throw error;
        
    //   })
    //   app.listen(process.env.PORT,()=>{
    //   console.log(`the server is running ${process.env.PORT}`);
      
    //   })
    } catch(error){
    console.log("mongodb not connected",error);
    process.exit(1)
    }
    
    
}
export default connectDb