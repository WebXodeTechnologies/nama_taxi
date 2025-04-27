import express from "express"
import {registerUser, verifyOtp} from "../controllers/user.controller"


const userRouter = express.Router();

userRouter.post("/registration", registerUser);
userRouter.post("/verify-otp", verifyOtp);

export default userRouter;