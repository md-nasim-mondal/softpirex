import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json({
        valid: false,
        message: "Token is required!",
        status: 400,
      });
    }

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpire: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({
        valid: false,
        message: "Invalid or expired token!",
        status: 400,
      });
    }

    return NextResponse.json({
      valid: true,
      message: "Token is valid!",
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      valid: false,
      message: err instanceof Error ? err.message : "An unknown error occurred",
      status: 500,
    });
  }
};
