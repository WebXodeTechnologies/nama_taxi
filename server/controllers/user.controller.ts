import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import twilio from "twilio";
import prisma from "../utils/prisma";
import jwt from "jsonwebtoken";
import {nylas} from "../app"
import { sendToken } from "../utils/send-token";

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken, {
  lazyLoading: true,
});

// Register New User Function

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { phone_number } = req.body;
    try {
      await client.verify.v2
        ?.services(process.env.TWILIO_SERVICE_SID!)
        .verifications.create({
          channel: "sms",
          to: phone_number,
        });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, message: "something went wrong" });
  }
};

// verify OTP Function


export const verifyOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { phone_number, otp } = req.body;

    try {
      await client.verify.v2
        .services(process.env.TWILIO_SERVICE_SID!)
        .verificationChecks.create({
          to: phone_number,
          code: otp,
        });
      // is user exist
      const isUserExist = await prisma.user.findUnique({
        where: {
          phone_number,
        },
      });
      if (isUserExist) {
        res.status(200).json({
          success: true,
          message: "OTP verified successfully!",
          user: isUserExist,
        });
      } else {
        // create account
        const user = await prisma.user.create({
          data: {
            phone_number: phone_number,
          },
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: "Something went wrong!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
    });
  }
};


// sign-up New user Logic

// export const signupNewUser = async (req: Request, res: Response, next: NextFunction) => {

//   try {
//     const { userId, name, email } = req.body;

//     const user = await prisma.user.findUnique({ where: { id: userId } })
//     if (user?.email === null) {
//       const updatedUser = await prisma.user.update({ where: { id: userId }, data: { name: name, email: email } })
//       res.status(200).json({ success: true, user: updatedUser, message: "New User Created Successfully" })
//     } else {
//       res.status(400).json({ success: false, message: "User Already Exists!" })
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// sending otp to mail

export const sendingOtpToEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, name, userId } = req.body;

    if (!email || !name || !userId) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    const user = { userId, name, email };

    const token = jwt.sign(
      { user, otp },
      process.env.EMAIL_ACTIVATION_SECRET!,
      { expiresIn: "5m" }
    );

    const emailBody = `
      <p>Hi ${name},</p>
      <p>Your Namma Call Taxi OTP is <strong>${otp}</strong>.</p>
      <p>If you didn't request this, please ignore this email.</p>
      <p>Thanks,<br />Namma Call Taxi Team</p>
    `;

    try {
      await nylas.messages.send({
        identifier: process.env.USER_GRANT_ID!,
        requestBody: {
          to: [{ name, email }],
          subject: "Verify Your Email Address!",
          body: emailBody,
        },
      });
      return res.status(200).json({
        success: true,
        message: "OTP sent successfully",
        token,
      });
    } catch (error) {
      console.error("Nylas email send error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to send email",
      });
    }
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};


// verifiying email otp

export const verifyingEmail = async(req:Request,res:Response,next:NextFunction) => {
  try {
    const {otp,token} = req.body
    const newUser:any = jwt.verify(token, process.env.EMAIL_ACTIVATION_SECRET!)

    if (newUser.otp !== otp) {
      return res.status(400).json({success:false,message:"OTP is Incorrect or Expired"})
    }
    const{name,email,userid} = newUser.user
    
    const user = await prisma.user.findUnique({ where: { email: email} })
    if (user?.email === null) {
      const updatedUser = await prisma.user.update({ where: { id: user.id }, data: { name: name, email: email } })
      await sendToken(updatedUser,res);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({success:false,message:"Your Otp is Expired"})
  }
}


