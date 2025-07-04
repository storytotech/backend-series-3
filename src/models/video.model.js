import mongoose,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const Video = Schema({
videofile :{
    type : String,
    required : true,
},
thumbnail : {
type : String,
required : true,
},
title :{
    type : String,
    required : true
},
description :{
    type : String,
},
duration : {
    type : Number,
    required : true,
},
views : {
    type : Number,
    default : 0
},
isPublished : {
    type : Boolean,
    default : true,
},
owner : {
    type : Schema.Types.ObjectId,
    ref : "USer"
}
},{timestamps : true})
Video.plugin(mongooseAggregatePaginate)
const newVideo = model("newVideo",Video)

export {newVideo}