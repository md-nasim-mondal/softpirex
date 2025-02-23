import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  });
  console.log("token from middleware:", token);
  const role = token?.role;
  const path = req.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/register";
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/sign-in", req?.url));
  }

  if (!token && isPublicPath) {
    return NextResponse.next();
  }

  if (
    (role === "admin" && path.startsWith("/admin-dashboard")) ||
    (role === "subscriber" && path.startsWith("/subscriber-dashboard")) ||
    (role === "member" && path.startsWith("/member-dashboard"))
  ) {
    return NextResponse.next();
  }
  if (role && isPublicPath) {
    return NextResponse.redirect(
      new URL(`${role.toLowerCase()}-dashboard/profile`, req.url)
    );
  }
  return new NextResponse("Forbidden", { status: 403 });
}

export const config = {
  matcher: [
    "/admin-dashboard/:path",
    "/trainer-dashboard/:path",
    "/member-dashboard/:path",
    "/login",
    "/register",
  ],
};
