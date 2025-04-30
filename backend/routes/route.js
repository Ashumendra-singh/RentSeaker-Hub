import express from "express";
import { registerUser, verifyUser, login, getMe, logout } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middleware/isLoggedIn.middleware.js";
import { listings } from "../controllers/home.controller.js";

const router = express.Router();

// console.log("running");
router.post('/register', registerUser);
router.get('/verify/:token', verifyUser);
router.post('/login', login);
router.get('/getme', isLoggedIn, getMe);
router.get('/logout', isLoggedIn, logout);

// Home routes---

router.get('/listings',isLoggedIn, listings)


export default router;
