import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import twilio from "twilio";


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
        ?.services(process.env.SERVICE_SID!)
        .verifications.create({
          channel: "sms",
          to: phone_number,
        });
        
      return res.status(201).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, message:"something went wrong"});
  }
};


export const verifyOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
 try {
  const {phone_number,otp} = req.body;
  try {
    await client.verify.v2?.services(process.env.SERVICE_SID!).verificationChecks.create({ to: phone_number, code: otp })
    return res.status(200).json({success:true, message:"otp verified Successfully"})
  } catch (error) {
    console.log(error);
    return res.status(400).json({success:false,message:"something went wrong"});
  }
 } catch (error) {
  console.log(error);
  return res.status(400).json({success:false, message:"something went wrong"})
 }
};