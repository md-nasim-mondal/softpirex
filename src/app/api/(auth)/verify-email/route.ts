import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");
    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpire: { $gt: Date.now() },
    });
    if (!user) {
      return NextResponse.json({ message: "Invalid token!", status: 400 });
    }
    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpire = undefined;
    await user.save();
    return NextResponse.json({
      message: "Email successfully verified!",
      status: 200,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err?.message, status: 500 });
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
