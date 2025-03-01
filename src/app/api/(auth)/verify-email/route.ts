import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json({ message: "Token is required!", status: 400 });
    }

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpire: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({
        message: "Invalid or expired token!",
        status: 400,
      });
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpire = undefined;
    await user.save();

    return NextResponse.json({
      message: "Email successfully verified!",
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      message: err instanceof Error ? err.message : "An unknown error occurred",
      status: 500,
    });
  }
};
