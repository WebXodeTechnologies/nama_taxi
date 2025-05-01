"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOtp = exports.registerUser = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const twilio_1 = __importDefault(require("twilio"));
const prisma_1 = __importDefault(require("../utils/prisma"));
dotenv_1.default.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = (0, twilio_1.default)(accountSid, authToken, {
    lazyLoading: true,
});
// Register New User Function
const registerUser = async (req, res, next) => {
    try {
        const { phone_number } = req.body;
        try {
            await client.verify.v2
                ?.services(process.env.SERVICE_SID)
                .verifications.create({
                channel: "sms",
                to: phone_number,
            });
            return res.status(201).json({ success: true });
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ success: false });
        }
    }
    catch (error) {
        console.log(error);
        return res
            .status(400)
            .json({ success: false, message: "something went wrong" });
    }
};
exports.registerUser = registerUser;
// verify OTP Function
const verifyOtp = async (req, res, next) => {
    try {
        const { phone_number, otp } = req.body;
        if (!phone_number || !otp) {
            return res.status(400).json({ success: false, message: "Phone number and OTP required" });
        }
        if (!process.env.SERVICE_SID)
            throw new Error("Missing SERVICE_SID");
        const verification = await client.verify.v2.services(process.env.SERVICE_SID).verificationChecks.create({
            to: phone_number,
            code: otp,
        });
        if (verification.status !== "approved") {
            return res.status(401).json({ success: false, message: "Invalid or expired OTP" });
        }
        let user = await prisma_1.default.user.findUnique({ where: { phone_number } });
        if (!user) {
            user = await prisma_1.default.user.create({ data: { phone_number } });
        }
        // TODO: Add JWT token logic here
        return res.status(200).json({
            success: true,
            message: "OTP Verified Successfully",
            user,
            // token,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "Something went wrong" });
    }
};
exports.verifyOtp = verifyOtp;
