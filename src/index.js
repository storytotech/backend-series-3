// index.js

import dotenv from "dotenv"
import connectDb from "./db/index.js";
import { app } from "./app.js"; // app ko alag file mein rakho
dotenv.config({
    path : "../.env" // yeh likhne ki koi zaroorat nahi hai kyunki ham root se ise run ker rahe hain ppore application ko to process.pwd karke khud dhoondh lega aur hamara kaam ho jayega jab process.env mein to ab jahan caho use karo bina import dptenv her jagah likhe
})
connectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
    });
    app.on("error",()=>{
      console.log("error on the connectdb()",error);
      
    });
  })
  .catch((err) => {
    console.error("❌ DB connection failed", err);
    process.exit(1);
  });
