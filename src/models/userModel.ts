import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "Name is required!!"],
    },
    email: {
      type: String,
      required: [true, "Email is required!!"],
      unique: [true, "This email is already exists!!"],
    },
    password: {
      type: String,
      required: [true, "Password is required!!"],
    },
    image: {
      type: String,
    },
    provider: {
      type: String,
      enum: ["credentials", "google", "github"],
      default: "credentials",
    },
    role: {
      type: String,
      enum: ["admin", "subscriber", "member"],
      default: "member",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    joined_at: {
      type: Date,
      default: Date.now,
    },
    verifyToken: String,
    verifyTokenExpire: Date,
  },
  {
    collection: "users",
  }
);

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
