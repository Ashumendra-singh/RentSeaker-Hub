import User from "../models/User.model.js";
import nodemailer from "nodemailer"
import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



const registerUser = async(req, res)=>{
  console.log(req.body)
  const {name, email, password} = req.body

  if(!name || !email || !password){
    return res.status(400).json({
      message: "All fields required",
      success: false,
      data: {
        name,
        email
      }
    })
  }
  const isExist = await User.findOne({email})
  if(isExist){
    return res.status(400).json({
      message: "User allready Exist",
      success: false
    })
  }
  const token = await crypto.randomBytes(32).toString("hex");
  const user = new User({
    name,
    email,
    password,
    verificationToken : token
  })

  const isSave = await user.save();

  if(!isSave){
    return res.status(400).json({
      message: "SomeThing went wrong",
      success: false
    })
  }
  
// send mail------
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "31164d6df59f07",
    pass: "a0c732bfdcd166"
  },
});

const sender = {
  address: "hello@example.com",
  name: "Mailtrap Test",
};

const mailOption = {
  from: sender,
  to: user.email,
  subject: "verify email",
  text: `copy the link and paste on postman ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
}

const info = await transporter.sendMail(mailOption);

  return res.status(200).json({
    message: "Please verify Email",
    success: true,
    data:{
      name,
      email
    }
  });
}

const verifyUser = async(req, res)=>{
  const token =  req.params.token;
  if(!token){
    res.send(400).json({
      message: "Token not found"
    })
  }
  const user = await User.findOne({verificationToken: token})
  if(!user){
    res.send(400).json({
      message: "Invalid user"
    })
  }
  user.isVerified = true;
  user.verificationToken = undefined
  await user.save();
  res.status(200).json({
    message: "user verified"
})
}

const login = async(req, res)=>{
  console.log(req.body);
  const {email, password} = req.body;
  if(!email || !password){
    return res.status(400).json({
      message : "All field are required"
    })
  }
  const user = await User.findOne({email});
  const passwordMathced = bcrypt.compare(password, user.password);
  if(!passwordMathced || !(user.password === password)){
    return res.status(400).json({
      success: false,
      message : "Invalid email or password"
    })
  }

  const token = jwt.sign({email,
  role : user.role}, process.env.JWT_SECRET, { expiresIn: '24h' })
  res.cookie("token", token);
  

  res.status(200).json({
    success: true,
    user

  })
}

const getMe = async(req, res)=>{
  const {email} = req.body;
  if(!email){
    return res.send(400).json({
      message: "Invalid user"
    })
  }
  const user = await User.findOne({email}).select("-password") ;

  if(!user){
    return res.status(400).json({
      message: "Invalid user"
    })
  }

  res.status(200).json({
    user
  }) 
}

const logout = async(req, res)=>{
  res.cookie("token", "");
  res.status(200).json({
    message: "User logOut"
  })
}



export  {registerUser, verifyUser, login, getMe, logout}