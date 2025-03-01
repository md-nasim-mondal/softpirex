import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (request: NextRequest) => {
  const passData = await request.json();
  const { password } = passData;
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json({ message: "Token is required!", status: 400 });
    }

    const user = await User.findOne({
      resetToken: token,
      resetTokenExpire: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({
        message: "Invalid or expired token!",
        status: 400,
      });
    }

    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpire = undefined;
    await user.save();

    return NextResponse.json({
      message: "Password successfully reset!",
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      message: err instanceof Error ? err.message : "An unknown error occurred",
      status: 500,
    });
  }
};
