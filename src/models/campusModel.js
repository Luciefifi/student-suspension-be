import mongoose from "mongoose";
const campusSchema = mongoose.Schema({
    name:{
    type: String,
    required: true,
    },
    location:{
        type: String,
        required: true,
    },
    image:{
        type:String,
        required: true,
    },
    createdAt: Date.now()

})

const Campus = mongoose.model('Campus', campusSchema)
export default Campus;