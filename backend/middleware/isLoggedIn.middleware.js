import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next)=>{
    try{
        const token = req.cookies.token;
        const decoded =await jwt.verify(token, process.env.JWT_SECRET);
        req.body = {...decoded};
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: "unAuthorized Access"
        })
    }
    next();
}

export {isLoggedIn}