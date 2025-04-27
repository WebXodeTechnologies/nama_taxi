import express from "express"
import {registerUser} from "../controllers/user.controller"


const userRouter = express.Router();

userRouter.post("/registration", registerUser);

export default userRouter;