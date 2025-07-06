import express from "express"
import userrouter from "./route/user.routes.js"
import cors from "cors"
const app = express()





app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credential :true
}))
app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({limit : "16kb", extended : true}))

app.use(express.static("public"))





// declartion routes 

app.use("/users",userrouter)
export {app};