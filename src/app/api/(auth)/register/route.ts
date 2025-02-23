import { connectDB } from "@/database/dbConfig";
import { NextResponse, type NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { SendEmail } from "@/helper/SendMail";
import User from "@/models/userModel";

export const POST = async (request: NextRequest) => {
  try {
    await connectDB();

    // Parse the request body
    const userInfo = await request.json();
    const { name, email, password } = userInfo;

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json({
        message: "Missing required fields (name, email, password)",
        status: 400,
      });
    }

    // Validate data types
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return NextResponse.json({
        message: "Invalid data types (name, email, password must be strings)",
        status: 400,
      });
    }

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ message: "User already exists", status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create and save the new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const sendEmail = await SendEmail(email, "verify-email");
    if (sendEmail === "Email sent successfully!") {
      return NextResponse.json(
        {
          message: "User created successfully",
          status: 200,
          user: { name, email },
        },
        { status: 201 }
      );
    }
  } catch (err: unknown) {
    console.error("Error:", err);

    // Handle Mongoose validation errors
    if (err instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { message: err.message, status: 400 },
        { status: 400 }
      );
    }

    // Handle other errors
    if (err instanceof Error) {
      return NextResponse.json(
        { message: err.message, status: 500 },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: "An unknown error occurred", status: 500 },
        { status: 500 }
      );
    }
  }
};
