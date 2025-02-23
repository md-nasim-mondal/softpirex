import User from "@/models/userModel";
import nodemailer from "nodemailer";
import crypto from "crypto";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER as string,
    pass: process.env.GMAIL_PASS as string,
  },
});

export const SendEmail = async (email: string, emailType: string): Promise<string> => {
  try {
    // **1. Random Token Generate করা**
    const token = crypto.randomBytes(32).toString("hex");

    if (emailType === "verify-email") {
      await User.findOneAndUpdate(
        { email },
        {
          verifyToken: token,
          verifyTokenExpire: Date.now() + 60 * 60 * 1000, // **১ ঘন্টা**
        }
      );
    }

    // **2. Mail Options**
    const mailOptions = {
      from: process.env.GMAIL_USER as string,
      to: email,
      subject: "Verify Your Email",
      html: `Click the link below to <a href="${process.env.NEXT_PUBLIC_BASE_URL}/verify-email?token=${token}">Verify your email</a>`,
    };

    // **3. sendMail Async করার জন্য Promise ব্যবহার**
    await transporter.sendMail(mailOptions);

    return "Email sent successfully!";
  } catch (error) {
    console.error("Email send error:", error);
    return error instanceof Error ? error.message : "Unknown error occurred";
  }
};
