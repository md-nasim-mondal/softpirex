import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "@/models/userModel";
import { connectDB } from "@/database/dbConfig";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(
        credentials: Credentials | undefined
      ): Promise<User | null> {
        if (!credentials) {
          throw new Error("Credentials not found!");
        }
        await connectDB();
        try {
          const { email, password } = credentials;
          const user = await Users.findOne({ email });
          if (!user) {
            throw new Error("Invalid Credentials!");
          }
          if (!user?.isVerified) {
            throw new Error("Please verify your email!");
          }
          const matchPassword = await bcrypt.compare(password, user?.password);
          if (!matchPassword) {
            throw new Error("Invalid Credentials!");
          }
          return user;
        } catch (err: unknown) {
          throw new Error(err as string);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      await connectDB();
      const userExist = await Users.findOne({ email: user?.email });
      if (!userExist) {
        const newUser = new Users({
          name: user?.name,
          email: user?.email,
          provider: account?.provider,
          isVerified: true,
        });
        await newUser.save();
      }
      return true;
    },
    async jwt({ user, token }) {
      if (user) {
        token.name = user?.name;
        token.email = user?.email;
        token.role = user?.role;
        token.image = user?.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session?.user) {
        session.user.name = token?.name;
        session.user.email = token?.email;
        session.user.role = token?.role;
        if (typeof token?.image === "string") {
          session.user.image = token?.image;
        }
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
};

interface Credentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}
