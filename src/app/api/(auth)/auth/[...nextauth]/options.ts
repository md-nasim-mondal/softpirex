import { connectDB } from "@/database/dbConfig";
import Users from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Credentials | undefined
      ): Promise<User | null> {
        if (!credentials) {
          return null;
        }

        await connectDB();

        try {
          const { email, password } = credentials;
          const user = await Users.findOne({ email });

          // Check if user exists
          if (!user) {
            return null;
          }

          // Check if the user's email is verified
          if (!user.isVerified) {
            throw new Error("Please verify your email before logging in!");
          }

          // Check if the password is correct
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            return null;
          }

          // Return the user object if everything is valid
          return {
            id: user._id.toString(), // Ensure `id` is a string
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role,
            provider: user.provider,
            isVerified: user.isVerified,
          } as User;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // GitHub Provider
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async signIn({ user, account }) {
      await connectDB();

      // Check if the user already exists in the database
      const userExist = await Users.findOne({ email: user.email });

      if (!userExist) {
        // Create a new user if they don't exist
        const newUser = new Users({
          name: user.name,
          email: user.email,
          image: user.image,
          provider: account?.provider, // Save the provider (e.g., "google", "github")
          isVerified: true, // Mark Google/GitHub users as verified by default
        });
        await newUser.save();
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id.toString();
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.image = user.image;
        token.provider = user.provider; // Add provider to the token
        token.isVerified = user.isVerified; // Add isVerified to the token
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
        session.user.image = token.image as string;
        session.user.provider = token.provider as string;
        session.user.isVerified = token.isVerified as boolean;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
};

interface Credentials {
  email: string;
  password: string;
}
