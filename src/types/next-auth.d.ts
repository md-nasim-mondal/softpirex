import type { ObjectId } from "mongoose";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    _id: ObjectId;
    role: string;
    provider?: string;
    isVerified: boolean;
  }

  interface Session {
    user: {
      id: string;
      role: string;
      image?: string;
      provider?: string;
      isVerified: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
  }
}
