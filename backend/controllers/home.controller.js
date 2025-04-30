import Home from "../models/Home.model.js"
const listings = async (req, res)=>{
    const list =  await Home.find({});
    // console.log("request comming", list);
    res.status(200).json({
        list
    })
}


export {listings}