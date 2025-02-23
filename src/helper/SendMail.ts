import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import toast from "react-hot-toast";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER as string,
    pass: process.env.GMAIL_PASS as string,
  },
});

export const SendEmail = async (
  email: string,
  emailType: string
): Promise<string> => {
  const token = await bcrypt.hash(email, 12);
  if (emailType === "verify-email") {
    await User.findOneAndUpdate(
      {
        email,
      },
      {
        verifyToken: token,
        verifyTokenExpire: Date.now() + 60 * 60 * 10000,
      }
    );
  }
  const mailOptions = {
    from: process.env.GMAIL_USER as string,
    to: email,
    subject: "Verify Email",
    text: "Please click the link below",
    html: `Click the link below to <a href="${process.env.NEXT_PUBLIC_BASE_URL}/verify-email?token=${token}">Verify your email address</a>`,
  };
  let errorMessage;
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      errorMessage = error.toString();
    } else {
      console.log("Email sent: " + info?.response);
      toast.success("Email sent successfully!");
    }
  });
  if (errorMessage) {
    return errorMessage;
  } else {
    return "Email sent successfully!";
  }
};
