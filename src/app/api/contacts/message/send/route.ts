import { NextRequest, NextResponse } from "next/server";
import { SendEmail } from "@/utils/SendEmail";

export async function POST(req: NextRequest) {
  try {
    const { senderName, senderEmail, subject, message } = await req.json();

    if (!senderName || !senderEmail || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailResponse = await SendEmail(senderEmail, "contact-us", {
      name: senderName,
      subject,
      message,
    });

    return NextResponse.json({ success: true, message: emailResponse });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send the message. Please try again later." },
      { status: 500 }
    );
  }
}
