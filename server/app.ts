require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route";
import Nylas from "nylas";

export const app = express();

const nylas = new Nylas({
    apiKey: process.env.NYLAS_API_KEY!,
  });

// body parser
app.use(express.json({ limit: "50mb" }));

// cookie parserv
app.use(cookieParser());

// routes
app.use("/api/v1", userRouter);

app.get("/test", (req: Request,res:Response,next:NextFunction) => {
    res.status(200).json({
        success:true,
        message:"Api is Working",
    });
});