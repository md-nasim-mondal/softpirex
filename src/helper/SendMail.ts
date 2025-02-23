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

export const SendEmail = async (
  email: string,
  emailType: string
): Promise<string> => {
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
      html: ` <section style="max-width: 42rem; margin: 0 auto; padding: 1rem">
      <table
        style="
          width: 100%;
          max-width: 42rem;
          background-color: #ffffff;
          border-radius: 0.5rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          overflow: hidden;
        "
      >
        <tbody>
          <tr>
            <td style="padding: 1.5rem">
              <div
                style="
                  display: flex;
                  padding: 0 1rem;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #1a237e;
                  border-radius: 0.5rem;
                "
              >
                <img src="https://i.postimg.cc/6p9zrL43/logo-removebg-preview.png" alt="Softpirex" style="height: 2rem" />
                <h3 style="color: white">SOFTPIREX</h3>
              </div>
            </td>
          </tr>
          <tr>
            <td style="text-align: center; padding: 2rem">
              <img
                src="https://i.postimg.cc/hjN3MW81/logol.png"
                alt="Softpirex Logo"
                style="
                  width: 50%;
                  background-color: #4b5563;
                  border-radius: 1rem 0 1rem 0;
                "
              />
              <h1
                style="
                  font-size: 1.875rem;
                  font-weight: bold;
                  color: #1a237e;
                  margin-top: 1.5rem;
                  margin-bottom: 1rem;
                "
              >
                Email Verification
              </h1>
              <p style="color: #4b5563; max-width: 28rem; margin: 0 auto">
                Get your verification code and verify your account. Please
                follow the steps below to complete your email verification
                process.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 2rem; text-align: center">
              <div
                style="
                  background-color: #f9fafb;
                  border-radius: 0.75rem;
                  padding: 2rem;
                "
              >
                <h2
                  style="
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                  "
                >
                  Verify Your Email
                </h2>
                <div
                  style="
                    background-color: #ffffff;
                    border-radius: 0.5rem;
                    padding: 1.5rem;
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
                      0 1px 2px 0 rgba(0, 0, 0, 0.06);
                    margin-bottom: 1.5rem;
                  "
                >
                  <p style="color: #4b5563; margin-bottom: 1rem">
                    To verify your account, you need to verify your recovery
                    email address.
                  </p>
                  <a
                    href="${
                      process.env.NEXT_PUBLIC_BASE_URL
                    }/verify-email?token=${token}"
                    style="
                      display: block;
                      background-color: #1a237e;
                      color: #ffffff;
                      padding: 0.75rem 2rem;
                      border-radius: 9999px;
                      font-weight: 500;
                      text-decoration: none;
                      margin-bottom: 1rem;
                    "
                    >VERIFY EMAIL</a
                  >
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td
              style="
                background-color: #1a237e;
                color: #ffffff;
                text-align: center;
                padding: 2rem;
              "
            >
              <h2
                style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: #fff"
              >
                Verify Your Email
              </h2>
              <p style="margin-bottom: 1rem">
                To verify your account or verify your email with SOFTPIREX
              </p>
              <p style="font-size: 0.875rem; color: #d1d5db">
                You can reach us at
              </p>
              <p style="font-size: 0.875rem; color: #d1d5db">
                Send your email to
                <a
                  href="mailto:support@softpirex.com"
                  style="color: #60a5fa; text-decoration: none"
                  >softpirex@gmail.com</a
                >
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>`,
    };

    // **3. sendMail Async করার জন্য Promise ব্যবহার**
    await transporter.sendMail(mailOptions);

    return "Email sent successfully!";
  } catch (error) {
    console.error("Email send error:", error);
    return error instanceof Error ? error.message : "Unknown error occurred";
  }
};
