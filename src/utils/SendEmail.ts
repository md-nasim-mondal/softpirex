import User from "@/models/userModel";
import nodemailer from "nodemailer";
import crypto from "crypto";
import { verifyEmailTemplate } from "@/utils/emailTemplates/verifyEmailTemplate";
import { resetPasswordTemplate } from "@/utils/emailTemplates/resetPasswordTemplate";
import { contactUsTemplate } from "@/utils/emailTemplates/contactUsTemplate";
import { thankYouTemplate } from "@/utils/emailTemplates/thankYouTemplate";
import { connectDB } from "@/database/dbConfig";

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
  emailType: string,
  extraData?: { name?: string; message?: string; subject?: string }
): Promise<string> => {
  try {
    let token = "";
    let subject = "";
    let htmlContent = "";
    let toEmail = email;
    let bccEmails: string[] = [];

    if (emailType === "verify-email" || emailType === "reset-password") {
      token = crypto.randomBytes(32).toString("hex");

      await connectDB();

      const updateField =
        emailType === "verify-email"
          ? {
              verifyToken: token,
              verifyTokenExpire: Date.now() + 60 * 60 * 1000,
            }
          : {
              resetToken: token,
              resetTokenExpire: Date.now() + 60 * 60 * 1000,
            };

      await User.findOneAndUpdate({ email }, updateField);

      subject =
        emailType === "verify-email"
          ? "Verify Your Email"
          : "Reset Your Password";
      htmlContent =
        emailType === "verify-email"
          ? verifyEmailTemplate(token)
          : resetPasswordTemplate(token);
    } else if (emailType === "contact-us" && extraData?.message) {
      // ✅ Send "Thank You" Email to User
      await transporter.sendMail({
        from: process.env.GMAIL_USER as string,
        to: email,
        subject: "Thank You for Contacting Us!",
        html: thankYouTemplate(extraData.name || "User"),
      });

      await connectDB();
      // **সব অ্যাডমিনদের ইমেইল বের করা**
      const admins = await User.find({ role: "admin" }).select("email");
      // if (admins.length === 0) throw new Error("No admin emails found.");
      if (admins.length === 0) {
        return "Emails sent successfully without admin!";
      } else {
        // **প্রথম অ্যাডমিনকে To, বাকিদের BCC তে রাখা**
        toEmail = process.env.GMAIL_USER as string;
        bccEmails = admins.map((admin) => admin.email);

        subject = `New Contact Form Message from ${extraData.name || "User"}`;
        htmlContent = contactUsTemplate(
          extraData.name || "Anonymous",
          email,
          extraData.subject || "No Subject",
          extraData.message
        );

        // ✅ Send Email to Admins
        await transporter.sendMail({
          from: process.env.GMAIL_USER as string,
          to: toEmail,
          bcc: bccEmails.length > 0 ? bccEmails : undefined,
          subject,
          html: htmlContent,
        });

        return "Emails sent successfully!";
      }
    } else {
      throw new Error("Invalid email type or missing data.");
    }

    // ✅ Normal email sending process (for verify/reset)
    await transporter.sendMail({
      from: process.env.GMAIL_USER as string,
      to: toEmail,
      bcc: bccEmails.length > 0 ? bccEmails : undefined,
      subject,
      html: htmlContent,
    });

    return "Email sent successfully!";
  } catch (error) {
    console.error("Email send error:", error);
    return error instanceof Error ? error.message : "Unknown error occurred";
  }
};
