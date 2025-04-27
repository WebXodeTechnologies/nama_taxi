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
      await client.verify._v2
        ?.services(process.env.TWILIO_ACCOUNT_SID!)
        .verifications.create({
          channel: "sms",
          to: phone_number,
        });
        console.log(req.body);
      return res.status(201).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false });
  }
};
