require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";


export const app = express();

// body parser
app.use(express.json({ limit: "50mb" }));

// cookie parserv
app.use(cookieParser());

app.get("/test", (req: Request,res:Response,next:NextFunction) => {
    res.status(200).json({
        success:true,
        message:"Api is Working",
    });
});