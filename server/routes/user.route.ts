import express from "express"
import {registerUser, sendingOtpToEmail, signupNewUser, verifyOtp} from "../controllers/user.controller"


const userRouter = express.Router();

userRouter.post("/registration", registerUser);
userRouter.post("/verify-otp", verifyOtp);
userRouter.put("/sign-up-user", signupNewUser);
userRouter.post("/email-otp-request", sendingOtpToEmail);

export default userRouter;