import mongoose from "mongoose";

const homeSchema = mongoose.Schema({
    title : {
        type: String,
        required : true,

    },
    discription : {
        type: String,
        required:true
    },
    country:{
        type:String,
        required: true
    },
    location:{
        type : String
    },
    price:{
        type: String,
        required: true
    },
    image:{
            filename:String,
            url: String
    }
})

const Home = mongoose.model("Home", homeSchema);

export default Home