import {v2 as cloudinary} from "cloudinary"
import { log } from "console";
import fs from "fs"

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

const uploader =  async (filepath)=>{
     try {if(!filepath)  return null;
    const response =  await cloudinary.uploader.upload(filepath,{
resource_type : "auto",
transformation: [
  { width: 400, height: 400, crop: "thumb", gravity: "face" },
  { effect: "sharpen" },
  { fetch_format: "auto", quality: "auto" }
],

})

console.log(response,response.url);
return response;




} catch(error) {
    fs.unlinkSync(filepath)
    // remove the locally saved temporary file as the upload opration got failed
    return null;
}}
export {uploader}
