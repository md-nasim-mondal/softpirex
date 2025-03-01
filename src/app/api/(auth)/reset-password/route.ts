import { connectDB } from "@/database/dbConfig";
import { NextResponse, type NextRequest } from "next/server";
import User from "@/models/userModel";
import { SendEmail } from "@/utils/SendEmail";

export const PUT = async (request: NextRequest) => {
  try {
    await connectDB();

    // Parse the request body
    const userInfo = await request.json();
    const { email } = userInfo;

    // Validate required fields
    if (!email) {
      return NextResponse.json({
        message: "Missing required fields",
        status: 400,
      });
    }

    // Check user exists or not
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json({
        message: "Invalid Credentials!",
        status: 400,
      });
    }

    // Send reset verification email
    const emailResponse = await SendEmail(email, "reset-password");

    return NextResponse.json(
      {
        message: emailResponse,
        status: 200,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    return NextResponse.json(
      {
        message:
          err instanceof Error ? err.message : "An unknown error occurred",
        status: 500,
      },
      { status: 500 }
    );
  }
};
