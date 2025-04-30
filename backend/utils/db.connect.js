import mongoose from "mongoose";

const dbConnect = ()=>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Db connected")
    })
    .catch(()=>{
        console.log("ERROR!!.. Db not connected");
    })
}

export default dbConnect;