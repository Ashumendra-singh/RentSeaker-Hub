import express from 'express';
import dotenv from "dotenv";
import dbConnect from './utils/db.connect.js';
import userRoutes from "./routes/route.js";
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';
import cors from "cors";

const app = express();
app.use(express.urlencoded({extended : true}))
app.use(cors({
    credentials : true,
    origin: "http://localhost:5173",
    methods : ["get", "post"]
}));
app.use(express.json());
app.use(cookieParser())
dotenv.config();
dbConnect();

const port = process.env.PORT || 4000;

app.get('/', async (req, res)=>{
    const password = "123"
    res.send("HELLO");
  
})

app.use('/api/v1/users', userRoutes);
// app.use('/api/v1/renters', rentersRoutes);


app.listen(port, ()=>{
    console.log(`server is running ${port}`);
})

